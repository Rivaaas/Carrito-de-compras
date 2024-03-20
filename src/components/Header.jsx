import useState from 'react'
import React from 'react'
import Filters from './Filters.jsx'

export function Header () {
  
  return (
    <header>
      <h1>React Shop 🛒</h1>
      <Filters/>
    </header>
  )
}