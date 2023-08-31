import { DriversCards } from "../../components/DriversCards/DriversCards"
import { FilterBar } from "../../components/FilterBar/FilterBar"

export const Home = () => {


    return (
        <div>
            <h1>HOME</h1>
            <p>This section is the home</p><br />

            <FilterBar/>
            <DriversCards />
        </div>
    )


}