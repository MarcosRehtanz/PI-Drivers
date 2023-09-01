import { useEffect } from "react"
import { DriversCards } from "../../components/DriversCards/DriversCards"
import { FilterBar } from "../../components/FilterBar/FilterBar"
import { useDispatch } from "react-redux"
import { getAllDrivers } from "../../redux/actions"

export const Home = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllDrivers())
    },[])

    return (
        <div>
            <h1>HOME</h1>
            <p>This section is the home</p><br />

            <FilterBar/>
            <DriversCards />
        </div>
    )


}