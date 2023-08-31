import { useSelector } from "react-redux"

export const FilterBar = () => {

    const allTeams = useSelector(state => state.allTeams)

    return(
        <div>
            <input type="search" list="listOfTeams" placeholder={`Ford ,Jordan, ...`} name="team"/>
            <datalist id="listOfTeams">
                {allTeams.map(team => {
                    return <option value={team.name}></option>
                })}
            </datalist>
        </div>
    )

}