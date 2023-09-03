import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import './Detail.css'

export const Detail = () => {

    const { id } = useParams()
    const [driver, setDriver] = useState({})

    const getDriver = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/drivers/${id}`)
            console.log(await {
                ...data,
                teams: data.teams.map((team) => team)
            });
            setDriver(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getDriver()
    }, [])

    return (

        <div id="Detail-container">
            <section id="section-container-header">
                <div id="header-image">
                    <Link to='/home'>
                        <button id="header-button" />
                    </Link>
                </div>
                <div id="header-title">
                    <h1>{driver.name} {driver.surname}</h1>
                    <p>{driver.birthdate} {driver.nationality}</p>
                    {
                        driver?.teams ? <p>{driver?.teams?.map(team => team?.name).join(', ')}</p> : ''
                    }
                </div>
            </section>
            <section id="section-container-data">
                <img id="Detail-image" src={driver.image ? driver.image : 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png'} alt={driver.name} />
                <p id="Detail-description" >{driver.description}</p>
            </section>
            <section>
                {isNaN(+id)
                    ? <Link to={`/drivers/edit/${id}`}>
                        <button id="Detail-edit-button" className="Effect-button">EDIT</button>
                    </Link>
                    : <br />
                }
            </section>
        </div>

    )

}