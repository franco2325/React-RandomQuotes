import React, { useState } from 'react'

function Searcher() {
  const [frases, setFrases] = useState('')

  const nuevaFrase = () => {
    const api = 'https://type.fit/api/quotes'
    const random = Math.floor(Math.random() * (1436 + 1))

    fetch(api)
      .then((response) => response.json())
      .then((data) => setFrases(data[random]))
  }

  return (
    <div className='col mx-auto'>
      <h1>"Motivational Quotes"</h1>
      <div className='text-center boton'>
        <button type='button' className='btn btn-info ' onClick={nuevaFrase}>
          New
        </button>
      </div>
      <div className='col-md-6 mx-auto personalizado'>
        <h3 id='titulo'>{frases.text}</h3>
        <h4>{frases.author}</h4>
      </div>
    </div>
  )
}

export default Searcher
