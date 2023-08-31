import { Link } from 'react-router-dom'
import './DriverCard.css'

export const DriverCard = ({ id, name, surname, image, teams }) => {

    return (

        <div id={id} className="DriverCard-container">
            <Link to={`/driver/${id}`} >
                <img className='DriverCard-image' src={image} alt="foto" />
                <p>{name} {surname}</p>
                { teams ? <ul>{teams.map((team,i)=><li key={i}>{team}</li>)}</ul> :'' }
            </Link>
        </div>

    )

}