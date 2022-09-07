import './Card.css'

function Card(props) {
  const cardColor = props.color

  function buttonMouseEnter(e) {
    e.target.style.background = cardColor
    e.target.style.color = 'hsl(0, 0%, 95%)'
    e.target.style.cursor = 'pointer'
  }

  function buttonMouseLeave(e) {
    e.target.style.background = 'hsl(0, 0%, 95%)'
    e.target.style.color = cardColor
  }

  return (
    <div className="Card" style={{ backgroundColor: cardColor }}>
      <img className="CardIcon" src={props.icon} alt={props.altIconText} />
      <h1 className="CardTitle">{props.name}</h1>
      <p className="CardDescription">{props.text}</p>
      <div
        className="CardButton"
        style={{ color: cardColor }}
        onMouseEnter={buttonMouseEnter}
        onMouseLeave={buttonMouseLeave}
      >
        Learn More
      </div>
    </div>
  )
}

export default Card
