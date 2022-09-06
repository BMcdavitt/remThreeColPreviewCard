import './Card.css'

function Card(props) {

    const cardColor = props.color
    return(
        <div className='Card' style={{ backgroundColor: cardColor }}>
            <img className='CardIcon' src={props.icon} alt={props.altIconText}/>
            <h1 className='CardTitle'>{props.name}</h1>
            <p className='CardDescription'>{props.text}</p>
            <div className='CardButton' style={{ color: cardColor}}>Learn More</div>
        </div>
    )
}

export default Card