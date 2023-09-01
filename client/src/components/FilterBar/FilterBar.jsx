import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/actions"
import { useEffect, useState } from "react"

export const FilterBar = () => {

    const [ formFilter, setFormFilter ] =  useState({
        origin: 'ALL',
        teams: '*',
        order: 'na',
    })
    const allTeams = useSelector(state => state.allTeams)
    const dispatch = useDispatch()

    const handlerOrigin = ({ target }) => {
        setFormFilter((old)=>({
            ...old,
            [target.name]: target.value
        }))
    }

    useEffect(()=>{
        //dispatch(setFilter(formFilter))
    },[])

    return (
        <div>

            <form onSubmit={e => e.preventDefault()}>
                <section onChange={handlerOrigin} id='origin' >
                    <input checked={formFilter.origin==='ALL'} type="radio" id="input-radio-ALL" className="radio-driver" name="origin" value="ALL" />
                    <label for="input-radio-ALL">All Drivers</label><br />
                    <input checked={formFilter.origin==='API'} type="radio" id="input-radio-API" className="radio-driver" name="origin" value="API" />
                    <label for="input-radio-API">Default</label><br />
                    <input checked={formFilter.origin==='DB'} type="radio" id="input-radio-DB" className="radio-driver" name="origin" value="DB" />
                    <label for="input-radio-DB">Your driver</label>
                </section>

                <section>
                    <option value=""></option>
                </section>
                {
                    allTeams
                        ? <select onChange={e=> handlerOrigin(e)} name="teams" >
                            <option value='*' >All teams</option>
                            {allTeams.map((team, index) => {
                                return <option key={index} value={team.name} >{team.name}</option>
                            })}
                        </select>
                        : ''
                }
                <select onChange={(e)=>handlerOrigin(e)} name="order">
                    <optgroup label="Name">
                        <option value="na">a - z</option>
                        <option value="nd">z - a</option>
                    </optgroup>
                    <optgroup label="Age">
                        <option value="ad">youngest</option>
                        <option value="aa">oldes</option>
                    </optgroup>
                </select>
                <br />
                <button onClick={()=>dispatch(setFilter(formFilter))} >Filter</button>
            </form>

        </div>
    )

}