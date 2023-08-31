import { useDispatch, useSelector } from "react-redux"
import { setFilter, setOrder } from "../../redux/actions"

export const FilterBar = () => {

    const allTeams = useSelector(state => state.allTeams)
    const dispatch = useDispatch()

    const handlerFilter = ({target}) => {
        dispatch(setFilter(target.name, target.value))
    }
    const handlerOrder = async({target}) => {
        try {
            if(target.value[0]==='n')  dispatch(setOrder('name', target.value[1]));
            else dispatch(setOrder('birthdate', target.value[1]));
        } catch (error) {
            console.warn(error);
        }
    } 

    return (
        <div>
            {/* <input type="search" list="listOfTeams" placeholder={`Ford ,Jordan, ...`} name="team"/>
            <datalist id="listOfTeams">
                {allTeams.map(team => {
                    return <option value={team.name}></option>
                })}
            </datalist> */}
            {
                allTeams
                ? <select onChange={handlerFilter} name="teams" >
                    {allTeams.map((team, index) => {
                        return <option key={index} value={team.name} >{team.name}</option>
                    })}
                </select>
                : ''
            }
            <select onChange={handlerOrder} name="Order">
                <optgroup label="Name">
                    <option value="na">a - z</option>
                    <option value="nd">z - a</option>
                </optgroup>
                <optgroup label="Age">
                    <option value="ad">young</option>
                    <option value="aa">older</option>
                </optgroup>
            </select>
            {/* <select name="country" id="country">
                <optgroup label="Europe">
                    <option value="UK">UK</option>

                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                </optgroup>
                <optgroup label="North America">
                    <option value="">USA</option>

                    <option value="">Canada</option>
                </optgroup>
            </select> */}
        </div>
    )

}