import { useDispatch } from "react-redux"
import { getDriversForName } from "../../redux/actions"
import { useState } from "react"
import './SearchBar.css'


export const SearchBar = () => {

    const dispatch = useDispatch()
    const [ name, setName ] = useState()

    return(
        <div id="SearchBar-container">

            <input id="SearchBar-input" value={name} onChange={({target})=>setName(target.value)} type="text" name="name" />
            <button id="SearchBar-button" onClick={()=>dispatch(getDriversForName(name))} >Search</button>

        </div>
    )

}