import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Detail = () => {

    const { id } = useParams()
    const [driver, setDriver] = useState({})

    const getDriver = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/drivers/${id}`)
            console.log(await {
                ...data,
                teams: data.teams.map((team) => { return team.name })
            });
            await Promise.all(setDriver(() => {
                return {
                    ...data,
                    teams: data.teams.map((team) => team.name)
                }
            }))
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getDriver()
    }, [])

    return (

        <div>
            <p>{driver.name} {driver.surname}</p>
            <p>{driver.birthdate}</p>
            <p>{driver.nationality}</p>
            <p>{driver.description}</p>
            {/* {driver.teams[0]?.name
                ? <p></p>
                : [...driver.teams].map(team => <p>{team}</p>)
            } */}
            <img src={driver.image ? driver.image : 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png'} alt={driver.name} />
        </div>

    )

}