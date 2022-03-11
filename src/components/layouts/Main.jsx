import './card.css'
import React, { useState } from 'react'
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
      <div className='all'>
      <input type="text" onChange={ event } id="input"/>
      </div>
      <section className='main'>
        {/* for item in personajes */}
        {personajes.map(item => (
        <div className='card'>
          <div className='cardimg'>
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

