import axios from 'axios'
import { useState, useEffect } from 'react'
import { DriverCard } from '../DriverCard/DriverCard'
import { useSelector } from 'react-redux'

import './DriversCards.css'

export const DriversCards = () => {

    const [pages, setPages] = useState(0)
    const [selector, setSelector] = useState(1)
    const [drivers, setDrivers] = useState([])
    const [error, setError] = useState('')
    const globalStates = useSelector(state => state)

    const renderCards = () => {
        const arr = drivers.slice(selector * 9 - 9, selector * 9);
        return arr.map(({ id, name, surname, image }) => {

            return <DriverCard
                key={id}
                id={id}
                name={name}
                surname={surname}
                image={image ? image : 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png'}
            />
        })
    }

    
    const handlePage = (page) => {
        setSelector(page)
    }
    
    useEffect(() => {
        setDrivers(globalStates.filterDrivers)
        setPages(Math.ceil(globalStates.filterDrivers.length / 9))
    }, [globalStates.filterDrivers])

    return (
        <div id='DriversCards-container'>
            {error ? <label className='error-message'>{error}</label> : <br />}

            <section id='selector-container' >
                {selector <= 1 ? <p></p> : <button onClick={() => handlePage(1)} >1</button>}
                {selector <= 2 ? <p></p> : <button onClick={() => handlePage(selector - 1)} >◄</button>}
                <span>{selector}</span>
                {selector >= pages - 1 ? <p></p> : <button onClick={() => handlePage(selector + 1)} >►</button>}
                {selector >= pages ? <p></p> : <button onClick={() => handlePage(pages)} >{pages}</button>}
            </section>

            <section id='cards-section' >
                {renderCards()}
            </section>

        </div>
    )

}