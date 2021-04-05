import React, {useContext} from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {CartContext} from '../../CartContext';


const Navbar = ()=>{

    const [cart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.product.price, 0)
  

  return(

    <div className="navbar">

      <Container>
        <div className="navbar__logo__container">
          <img className="navbar__logo__container__img" src="./images/patterson-agency-logo.png" alt="patterson-logo"/>
        </div>

        <Link to='/carrito'>
          <div className="navbar__cart__details__container">

            <div className="navbar__cart__details__container__img">
              <img src="./images/carrito.svg" alt="carrito"/>
            </div>

          
              <div className="navbar__cart__details_container_text">
                <p className="navbar__cart__details__container__text__price">{totalPrice.toFixed(2)} €</p>
                <p className="navbar__cart__details__container__text__title">Mi Carrito</p>
              </div>            

          
          </div> 
        </Link>
       
      </Container>


    </div>
  )
}

export default Navbar;