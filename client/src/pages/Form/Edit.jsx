import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import './Edit.css'

export const Edit = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const allTeams = useSelector(state => state.allTeams)
    const [driver, setDriver] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
        birthdate: '',
        description: '',
        teams: '',
        oldTeams: '',
    })

    const getDriver = async () => {
        try {
            const { data } = await axios.get(`http://localhost:3001/drivers/${id}`)
            console.log(await {
                ...data,
                teams: data.teams.map((team) => team.name).join(', '),
                oldTeams: data.teams.map((team) => team.name).join(', ')
            });
            setDriver({
                ...data,
                teams: data.teams.map((team) => team.name).join(', '),
                oldTeams: data.teams.map((team) => team.name).join(', ')
            })
        } catch (error) {
            navigate('/home')
            console.log(error.message);
        }
    }

    const handleChange = ({ target }) => {

        if (target.name === 'teams') {
            target.value == 0
                ? console.log('Estoy Vacio')
                : setDriver(oldDriver => {
                    console.log(driver.teams === ''
                        ? target.value
                        : !driver.teams.includes(target.value)
                            ? driver.teams + ', ' + target.value
                            : driver.teams
                    );

                    return {
                        ...oldDriver,
                        teams: !driver.teams
                            ? target.value
                            : !driver.teams.includes(target.value)
                                ? driver.teams + ', ' + target.value
                                : driver.teams
                    }
                })
        } else {

            setDriver(oldDriver => {
                return {
                    ...oldDriver,
                    [target.name]: target.value
                }
            })
        }
    }
    const removeTeam = ({ target }) => {
        setDriver(oldDriver => ({
            ...oldDriver,
            teams: oldDriver.teams.split(', ').filter(team => team !== target.name).join(', ')
        }))
        console.log(target.name);
    }

    const handleUpDate = async () => {
        if (true) {
            console.log(driver);
            try {
                const { data } = await axios.put(`http://localhost:3001/drivers`, driver)
                alert(data)
            } catch (error) {
                alert(error.message);
            }
        }
    }

    useEffect(() => {
        isNaN(+id)
        ? getDriver()
        : navigate('/home')
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
                    <div className='input-section'>
                        <label className='label-name' >Fecha de Nacimiento</label>
                        <input value={driver.birthdate} onChange={handleChange} name="birthdate" className='input input-date' type="date" />
                        <label className='label-name' >Nacionalidad</label>
                        <input value={driver.nationality} onChange={handleChange} name="nationality" className='input' type="text" />
                    </div>
                    <label className='label-name' >Escuderías</label>
                    <select onChange={handleChange} name="teams" id="">
                        <option value='0'>Select a Team *</option>
                        {allTeams.map(team => <option value={team.name} >{team.name}</option>)}
                    </select>
                    {!driver.teams
                        ? <p>quien</p>
                        : driver.teams.split(', ').map((team) => <>
                            -<button onClick={removeTeam} className='team' name={team}>{team}</button>-
                        </>)
                    }
                </div>
            </section>
            <section id="section-container-data">
                <section>
                    <div className='input-section' >
                        <label className='label-name' >Imagen</label>
                        <input value={driver.image} onChange={handleChange} name="image" className='input' type="url" />
                    </div>
                    <img id="Detail-image" src={driver.image ? driver.image : 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png'} alt={driver.name} />
                </section>
                <section>
                    <div style={{ display: "flex", flexDirection: "column" }} className='input-section input-section-date' >
                        <label className='label-name' >Descripción:</label>
                        <textarea value={driver.description} onChange={handleChange} name="description" className='input' cols="30" rows="10" />
                    </div>
                </section>
            </section>
            <section>
                {isNaN(+id)
                    ? <button onClick={handleUpDate} id="Detail-edit-button" className="Effect-button">UPDATE</button>
                    : <br />
                }
            </section>
        </div>

    )

}