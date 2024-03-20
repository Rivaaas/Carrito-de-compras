import './App.css'
import React, {useState} from 'react'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Test } from './components/Test'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import {useFilters} from '../src/hooks/useFilters'
import { Cart } from './components/Cart'


function App() {
  const [products] = useState(initialProducts)
  const {filters,filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header  />
      <Cart/>
      <Products products={filteredProducts} />
     {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
