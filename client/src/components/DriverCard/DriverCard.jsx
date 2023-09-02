import { Link } from 'react-router-dom'
import './DriverCard.css'

export const DriverCard = ({ id, name, surname, image, teams }) => {

    return (

        <Link to={`/drivers/${id}`} id={id} className='DriverCard-container navigate-item' >
            <h1 className='DriverCard-name'>{name} {surname}</h1>
            <div className='DriverCard-image'><img className='Driver-image' src={image} alt="foto" /></div>
            {teams ? <p className='DriverCard-data'>{teams.map((team) => team.name).join(', ')}</p> : ''}
            {/* {teams ? <div className='DiverCard-data'>{teams.map((team, i) => <p key={i}>{team.name}</p>)}</div> : ''} */}
        </Link>

    )

}