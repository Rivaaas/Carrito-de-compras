import { useId } from 'react'
import { ClearCartIcon, CartIcon } from './Icons.jsx'
import './Cart.css'
import { useCart } from '../hooks/useCart.jsx'


function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <img
                src={thumbnail}
                alt={title}
            />
            <div>
                <storong>{title}</storong> - ${price}
            </div>

            <footer>
                <small>
                    Cantidad: {quantity}
                </small>
                <button style={{ background: 'white' }}  onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, cleanCart, addToCart } = useCart()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                        {...product}
                        />
                    ))}

                </ul>
                <button style={{ background: 'white' }} onClick={cleanCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}