import './Footer.css'

export function Footer({filters}) {
    return (
        <footer className='footer'>
            {
                JSON.stringify(filters, null, 2)
            }

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

