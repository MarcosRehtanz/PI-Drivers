import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.css'


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

    const handleChange = ({ target }) => {
        setDriver(oldDriver => {
            return {
                ...oldDriver,
                [target.name]: target.value
            }
        })
    }

    const [error, setError] = useState({})
    const validate = () => {
        let err = {}
        if( !driver.name) err.name = 'Campo Obligatorio'
        if( !driver.surname) err.surname = 'Campo Obligatorio'
        if( !driver.nationality) err.nationality = 'Campo Obligatorio'
        // //if( !driver.image) err.image = 'Campo Obligatorio'
        if( !driver.birthdate) err.birthdate = 'Campo Obligatorio'
        if( !driver.description) err.description = 'Campo Obligatorio'
        if( !driver.teams) err.teams = 'Campo Obligatorio'

        setError(()=>err)
    }

    const navigate = useNavigate()
    const submit = async() => {
        try {
            await axios.post('http://localhost:3001/drivers', driver)
            alert('Suscripción exitosa')
            navigate('/home')
        } catch (error) {
            alert(error.message)
            navigate('/home')
        }
    }

    useEffect(()=> {
        validate()
    }, [driver])

    return (
        <div>
            <form onSubmit={e => e.preventDefault()} >

                <div className='input-section' >
                    <label className='label-name' >Nombre</label>
                    <input value={driver.name} onChange={handleChange} name="name" className='input' type="text" />
                </div>
                {!error.name ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section' >
                    <label className='label-name' >Apellido</label>
                    <input value={driver.surname} onChange={handleChange} name="surname" className='input' type="text" />
                </div>
                {!error.surname ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section' >
                    <label className='label-name' >Nacionalidad</label>
                    <input value={driver.nationality} onChange={handleChange} name="nationality" className='input' type="text" />
                </div>
                {!error.nationality ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section' >
                    <label className='label-name' >Imagen</label>
                    <input value={driver.image} onChange={handleChange} name="image" className='input' type="text" />
                </div>
                {!error.image ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section'>
                    <label className='label-name' >Fecha de Nacimiento</label>
                    <input value={driver.birthdate} onChange={handleChange} name="birthdate" className='input input-date' type="date" />
                </div>
                {!error.birthdate ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section input-section-date' >
                    <label className='label-name' >Descripción:</label>
                    <textarea value={driver.description} onChange={handleChange} name="description" className='input' cols="30" rows="10"/>
                </div>
                {!error.description ? <br /> : <label className='error-message'>error</label>}

                <div className='input-section' >
                    <label className='label-name' >Escuderías</label>
                    <input value={driver.teams} onChange={handleChange} name="teams" className='input' type="text" />
                </div>
                {!error.teams ? <br /> : <label className='error-message'>error</label>}

                <button onClick={submit} >Submit</button>
            </form>
        </div>
    )

}