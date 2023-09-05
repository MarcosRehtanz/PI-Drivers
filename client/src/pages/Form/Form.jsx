import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import './Form.css'
import { addDriver } from "../../redux/actions"

export const Form = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation().pathname
    const allTeams = useSelector(state => state.allTeams)
    const dispatch = useDispatch()
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
                navigate('/home')
            } catch (error) {
                alert(error.message);
            }
        }
    }
    const handleCreate = () => {
        try {
            // if (Object.keys(error).length > 0) {
            //     alert('Completa todos los campos para continuar el registro')
            //     return;
            // }
            console.log(driver);
            dispatch(addDriver(driver))
            alert('Suscripción exitosa')
            navigate('/home')
        } catch (err) {
            alert(err.message)
            navigate('/home')
        }
    }



    useEffect(() => {
        if (location !== '/form') {
            isNaN(+id)
                ? getDriver()
                : navigate('/home')
        }
    }, [])

    return (

        <div id="Detail-container">
            <section id="form-section-container-header">
                <div id="header-image">
                    <Link to='/home'>
                        <button id="header-button" />
                    </Link>
                </div>
                <div id="header-title">
                    {/* <h1>{driver.name} {driver.surname}</h1> */}
                    <div>
                        <div className='input-section' >
                            <label className='label-name' >Nombre</label>
                            <label className='label-name' >Apellido</label>
                            <input autoComplete="false" placeholder="name" value={driver.name} onChange={handleChange} name="name" className='input-form input-header input-name' type="text" />
                            {/* {!error.name ? <br /> : <label className='error-message'>error</label>} */}

                            <input autoComplete="false" placeholder="surname" value={driver.surname} onChange={handleChange} name="surname" className='input-form input-header input-surname' type="text" />
                            {/* {!error.surname ? <br /> : <label className='error-message'>error</label>} */}
                        </div>
                    </div>
                    <div className='input-section'>
                        <label className='label-name' >Fecha de Nacimiento</label>
                        <input autoComplete="false" placeholder="birthdate" value={driver.birthdate} onChange={handleChange} name="birthdate" className='input-form input-date input-header' type="date" />
                        <label className='label-name' >Nacionalidad</label>
                        <input autoComplete="false" placeholder="nationality" value={driver.nationality} onChange={handleChange} name="nationality" className='input-form input-header' type="text" />
                    </div>
                    <label className='label-name' >Escuderías</label>
                    <select onChange={handleChange} name="teams" id="">
                        <option value='0'>Select a Team *</option>
                        {allTeams.map(team => <option value={team.name} >{team.name}</option>)}
                    </select>
                    {!driver.teams
                        ? <p>quien</p>
                        : <div id="teams-section">
                            {driver.teams.split(', ').map((team) =>
                                <button onClick={removeTeam} className='team-button input-header' name={team}>{team}</button>
                            )}
                        </div>
                    }
                </div>
            </section>
            <section id="Form-section-container-data">
                <div id="Form-image">
                    <div className='input-section' >
                        <label className='label-name' >Imagen</label>
                        <input placeholder="image" value={driver.image} onChange={handleChange} name="image" className='input-form' type="url" />
                    </div>
                    <img id="Detail-image" src={driver.image ? driver.image : 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png'} alt={driver.name} />
                </div>
                <div id="Form-description" className='input-section input-section-date' >
                    <label contenteditable="true" className='label-name' >Descripción:</label>
                    <textarea value={driver.description} onChange={handleChange} placeholder="Description" name="description" id="Detail-textarea-description" className='input-form' cols="30" rows="10" />
                </div>
            </section>
            <section>
                {location === '/form'
                    ? <button onClick={handleCreate} className="Effect-button" >Submit</button>
                    : isNaN(+id)
                        ? <section>
                            <button onClick={() => navigate(`/drivers/${id}`)} id="Detail-edit-button" className="Effect-button">CANCEL</button>
                            <button onClick={handleUpDate} id="Detail-edit-button" className="Effect-button">UPDATE</button>
                        </section>
                        : <br />
                }
            </section>
        </div>

    )

}