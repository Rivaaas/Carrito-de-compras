
import React from 'react'
import {useState} from 'react'

import './Filters.css'


export function Filters ({onChange}) {

  const [minPrice, setMinPrice] = useState("")


  const handleChangeMinPrice = (event) => {
    setMinPrice(event?.target.value)
    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }


  const handleChangeCategory = (event) => {
    onChange(prevState => ({
      ...prevState,
      category: event?.target.value
    }))
  }

  return (
      <section className='filters'>
        <div>
          <label htmlFor="price">Precio a partir de:</label>
          <input 
            type="range"
            id="price"
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
          />
        </div>
        <span>{minPrice}</span>
        <div>
          <label htmlFor='category'>Categoria</label>
          <select id='category' onChange={handleChangeCategory}>
              <option value="all">Todas</option>
              <option value="laptops">Laptops</option>
              <option value="smartphones">Celulares</option>
          </select>
        </div>
      </section>
  )
}

export default Filters