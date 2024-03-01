import './App.css'
import React, { useContext, useState } from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Test } from './components/Test'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './context/filters'


function useFilters() {
  // const [filters, setFilters] = useState({
  //   category: 'all',
  //   minPrice: 0
  // })

  const filters = useContext(FiltersContext)

  const setFilters = () => {}

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  return { filterProducts, setFilters , filters}
}

function App() {
  const [products] = useState(initialProducts)
  const {filters,filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
     {IS_DEVELOPMENT && <Footer filters={filters}/>}
    </>
  )
}

export default App
