import React from 'react'
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//COMPONENTS

import Finish from './Finish';
import Articles from './Articles';




const Cart = () => {


  return(
    <div className="cart">

      <Container>

        <div className="cart__container">
          <div className="left_block">
            <Articles/>     
            <Link to="/" >
              <p className="link__showcase">Seguir comprando </p>         
            </Link>       
          </div>

          <div className="right_block">
            <Finish />     
          </div>        
        </div>

      </Container>

    </div>
  )
};

  export default Cart;
