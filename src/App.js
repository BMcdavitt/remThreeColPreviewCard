import './App.css'
import Card from './Card'

function App() {
  return (
    <main className="App">
      <Card
        name="SEDANS"
        icon="./images/icon-sedans.svg"
        altIconText="A Sedan in front of a dark circle"
        text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
        color="hsl(31, 77%, 52%)"
      />
      <Card
        name="SUVS"
        icon="./images/icon-suvs.svg"
        altIconText="A SUV in front of a dark circle"
        text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        color="hsl(184, 100%, 22%)"
      />
      <Card
        name="LUXURY"
        icon="./images/icon-luxury.svg"
        altIconText="A Luxury Car in front of a dark circle"
        text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        color="hsl(179, 100%, 13%)"
      />
    </main>
  )
}

export default App
