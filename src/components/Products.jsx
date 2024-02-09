import React from 'react'
import './Product.css'
import { AddToCartIcon } from './Icons'


export function Products({ products }) {

  return (
    <>
      <main className='products'>
        <ul>
          {products.slice(1,10 ).map((product) => {
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
                <div>
                  <button>
                    <AddToCartIcon />
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