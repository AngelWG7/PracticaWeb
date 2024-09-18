import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="about">
        <h2>Sobre Estética Belleza Total</h2>
        <p>
          En Estética Belleza Total, ofrecemos una amplia gama de servicios de belleza para resaltar tu mejor versión. 
          Nuestro equipo de expertos utiliza productos de alta calidad y técnicas avanzadas para garantizar que te veas y sientas fabulosa.
        </p>
      </section>
      <section id="services">
        <h2>Servicios</h2>
        <ul>
          <li>Faciales</li>
          <li>Manicure y Pedicure</li>
          <li>Tratamientos Corporales</li>
          <li>Cortes y Peinados</li>
          <li>Maquillaje Profesional</li>
        </ul>
      </section>
    </>
  )
}

export default App
