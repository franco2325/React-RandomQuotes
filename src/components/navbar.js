import React from 'react'

function navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='nav-link link-info' to='/'>
            Random Quotes
          </a>
        </div>
      </nav>
    </div>
  )
}

export default navbar
