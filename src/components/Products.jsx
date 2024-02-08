import React from 'react'
import './Product.css'
import { AddToCartIcon } from './Icons'


export function Products({ productss }) {

  return (
    <>
      <main>
        <h1>HOLA</h1>
        <ul>
          {productss.map(product => {
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <h1>{product.title}</h1>

              <div>
                <strong>CUALQUIER</strong>
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          })}
        </ul>
      </main >
    </>
  )
}

export default Products