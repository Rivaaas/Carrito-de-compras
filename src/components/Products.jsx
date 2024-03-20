import React from 'react'
import './Product.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'


export function Products({ products }) {

  const {addToCart,cart,removeFromCart} = useCart()

  const checkProductInCar = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <>
      <main className='products'>
        <ul>
          {products.slice(1,10 ).map((product) => {
            const isProductInCar = checkProductInCar(product)
            return (
              <li key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h1>{product.title}</h1>
                <div>
                  <strong>{product.title}</strong> -${product.price}
                </div>
                <div><span>{product.category}</span></div>
                <div>
                  <button style={{ backgroundColor: isProductInCar ? 'red' : '#09f'}} onClick={() => {
                    isProductInCar ? removeFromCart(product) : addToCart(product)
                  }} >
                  {
                    isProductInCar ? <RemoveFromCartIcon/> : <AddToCartIcon/>
                  }
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </main >
    </>
  )
}

export default Products