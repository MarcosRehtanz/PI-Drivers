import './DriverCard.css'

export const DriverCard = ({ id, name, surname, image }) => {

    return (

        <div id={id} className="DriverCard-container">
            <img className='DriverCard-image' src={image} alt="foto" />
            <p>{name}</p>
            <p>{surname}</p>
        </div>

    )

}