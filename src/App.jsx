import './App.css'
import React from 'react'
import {Products} from './components/Products'
import { productss } from './mocks/products.json'

function App() {
  console.log(productss)
  return (
    <>
        <Products productss={productss} />
    </>
  )
  }

  export default App
