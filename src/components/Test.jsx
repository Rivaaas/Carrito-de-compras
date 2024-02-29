import useState from 'react'
import React from 'react'

export function Test({ products }) {

    return (
        <div>
             {
                products.slice(0,3).map((p) => (
                    <div style={{ display: 'flex' }}>
                        <div key={p.id}>
                            <h1>{p.title}</h1>
                            <img
                                src={p.thumbnail}
                                alt={p.title}
                            />
                        </div>
                    </div>
                ))
             }
        </div>
  )
}

export default Test