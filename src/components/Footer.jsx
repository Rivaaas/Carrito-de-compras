import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {

    const {filters} = useFilters()
    const {cart} = useCart()
    return (
        <footer className='footer'>
           

            {
                /*
                 <footer className='footer'>
                      <h4>Prueba técnica de React</h4>
                      <span>@Victor</span>
                      <h5>Shopping Cart con useContext y useReducer</h5>
                  </footer>
                */
            }
        </footer>
    )
}

