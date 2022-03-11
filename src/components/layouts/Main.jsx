import './card.css'
import React, { useState } from 'react'
import rick from './images/rick.jpg'
import axios from 'axios'

export const Main = () => {
  const [personajes, setPersonajes] = useState([])

  const event  = () =>{
    let name = document.querySelector('input').value
      axios.get("https://rickandmortyapi.com/api/character/?name="+name)
      .then(personaje =>{
        setPersonajes(personaje.data.results)
      }).catch(console.log)
  }

  return (
    <div>
      <br />
      <div className='all'>
        <div>
          <img src={ rick } alt="rick" className='rick'/>
        </div>
        <input type="text" onChange={ event } id="input" placeholder='Escribe un nombre'/>
      </div>
      <section className='main'>
        {/* for item in personajes */}
        {personajes.map(item => (
        <div className='card'>
          <div>
            <img src= { item.image } alt="" className='img'/>
          </div>
          <div className='p'>
            <p> { item.name } </p>  
          </div>  
        </div>
        ))}
      </section>
    </div>
  )
}

