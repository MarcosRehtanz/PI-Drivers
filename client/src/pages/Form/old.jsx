import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { addDriver, getAllDrivers } from '../../redux/actions'


export const Form = () => {

    const [driver, setDriver] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
        birthdate: '',
        description: '',
        teams: '',
    })
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const allTeams = useSelector(state => state.allTeams)

    const handleChange = ({ target }) => {

        if (target.name === 'teams') {
            target.value == 0
                ? console.log('Estoy Vacio')
                : setDriver(oldDriver => {
                    console.log(driver.teams === ''
                        ? target.value
                        : !driver.teams.includes(target.value)
                            ? driver.teams + ', ' + target.value
                            : driver.teams);

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

    const validate = () => {
        let err = {}
        if (!driver.name) err.name = 'Campo Obligatorio'
        if (!driver.surname) err.surname = 'Campo Obligatorio'
        if (!driver.nationality) err.nationality = 'Campo Obligatorio'
        // //if( !driver.image) err.image = 'Campo Obligatorio'
        if (!driver.birthdate) err.birthdate = 'Campo Obligatorio'
        if (!driver.description) err.description = 'Campo Obligatorio'
        if (!driver.teams) err.teams = 'Campo Obligatorio'

        setError(() => err)
        //console.log(Object.keys(error).length);
    }

    const submit = () => {
        try {
            if (Object.keys(error).length > 0) {
                alert('Completa todos los campos para continuar el registro')
                return;
            }
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
        validate()
    }, [driver])

    return (
            <form id='Form-container' onSubmit={e => e.preventDefault()} >
                <section id='Form-header'>
                    <div>
                        <div className='input-section' >
                            <label className='label-name' >Nombre</label>
                            <input value={driver.name} onChange={handleChange} name="name" className='input' type="text" />
                            {!error.name ? <br /> : <label className='error-message'>error</label>}
                        </div>

                        <div className='input-section' >
                            <label className='label-name' >Apellido</label>
                            <input value={driver.surname} onChange={handleChange} name="surname" className='input' type="text" />
                            {!error.surname ? <br /> : <label className='error-message'>error</label>}
                        </div>
                    </div>

                    <div className='input-section' >
                        <label className='label-name' >Nacionalidad</label>
                        <input value={driver.nationality} onChange={handleChange} name="nationality" className='input' type="text" />
                        {!error.nationality ? <br /> : <label className='error-message'>error</label>}
                    </div>


                    <div className='input-section'>
                        <label className='label-name' >Fecha de Nacimiento</label>
                        <input value={driver.birthdate} onChange={handleChange} name="birthdate" className='input input-date' type="date" />
                        {!error.birthdate ? <br /> : <label className='error-message'>error</label>}
                    </div>

                    <div className='input-section' >
                        <label className='label-name' >Escuderías</label>
                        <select onChange={handleChange} name="teams" id="">
                            <option value='0'>Select a Team *</option>
                            {allTeams.map(team => <option value={team.name} >{team.name}</option>)}
                        </select>
                        {error.teams
                            ? <label className='error-message'>error</label>
                            : driver.teams.split(', ').map((team) => <>
                                -<button onClick={removeTeam} className='team' name={team}>{team}</button>-
                            </>)
                        }
                    </div>
                </section>
                <section>
                    <div className='input-section' >
                        <label className='label-name' >Imagen</label>
                        <input value={driver.image} onChange={handleChange} name="image" className='input' type="url" />
                    </div>
                    {!error.image ? <br /> : <label className='error-message'>error</label>}
                    {driver.image
                        ? <img id='Form-photo-profile' src={driver.image} alt="" />
                        : <img id='Form-photo-profile' src="" alt="" />
                    }

                </section>

                <section>
                    <div className='input-section input-section-date' >
                        <label className='label-name' >Descripción:</label>
                        <textarea value={driver.description} onChange={handleChange} name="description" className='input' cols="30" rows="10" />
                    </div>
                    {!error.description ? <br /> : <label className='error-message'>error</label>}
                </section>

                <button onClick={submit} >Submit</button>
            </form>
    )

}