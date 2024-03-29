
import React from 'react'
import {useState, useId} from 'react'

import './Filters.css'
import { useFilters } from '../hooks/useFilters'


export function Filters () {

const {filters, setFilter} = useFilters()

  const handleChangeMinPrice = (event) => {
    setFilter.minPrice(event?.target.value)
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

  const minPriceFilterId = useId()
  const categoryFilterId = useId()


  return (
      <section className='filters'>
        <div>
          <label htmlFor="minPriceFilterId">Precio a partir de:</label>
          <input 
            type="range"
            id="minPriceFilterId"
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
        </div>
        <span>{filters.minPrice}</span>
        <div>
          <label htmlFor='categoryFilterId'>Categoria</label>
          <select id='categoryFilterId' onChange={handleChangeCategory}>
              <option value="all">Todas</option>
              <option value="laptops">Laptops</option>
              <option value="smartphones">Celulares</option>
          </select>
        </div>
      </section>
  )
}

export default Filters