import axios from 'axios'
import { useState, useEffect } from 'react'
import { DriverCard } from '../DriverCard/DriverCard'

import './DriversCards.css'

export const DriversCards = () => {

    const [section, setSection] = useState(2)
    const [drivers, setDrivers] = useState([])
    const [error, setError] = useState('')

    const getDrivers = async () => {
        try {
            const { data } = await axios.get('http://localhost:3001/drivers')
            setDrivers(data)
            setError('')
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        getDrivers()
    }, [])

    return (
        <div id='DriversCards-container'>
            {error ? <label className='error-message'>{error}</label> : <br />}
            <section id='cards-section' >
                {
                    drivers.map(({ id, name, surname, image }, index) => {
                        if (index >= section*9-9 && index < section*9) {
                            return <DriverCard
                                key={id}
                                id={id}
                                name={name}
                                surname={surname}
                                image={image}
                            />
                        }
                    })
                }
            </section>

        </div>
    )

}