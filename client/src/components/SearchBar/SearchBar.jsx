import { useDispatch } from "react-redux"
import { getDriversForName } from "../../redux/actions"
import { useState } from "react"


export const SearchBar = () => {

    const dispatch = useDispatch()
    const [ name, setName ] = useState()

    return(
        <div id="SearchBar-container">

            <input value={name} onChange={({target})=>setName(target.value)} type="text" name="name" id="" />
            <button onClick={()=>dispatch(getDriversForName(name))} >Buscar</button>

        </div>
    )

}