import React, {useContext} from 'react'
import {CartContext} from '../../CartContext';

//COMPONENTES
import Discount from './Discount';


const Finish = () => {

  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.product.price, 0)

  return(
    <div className="finish">
    
      <div className="finish__top">  

        <div className="finish__top__info">
          <span className="finish__top__info__articles">{cart.length} artículo</span>
          <span className="finish__top__info__price">{totalPrice.toFixed(2)} €</span>          
        </div>

        <button className="finish__top__button">FINALIZAR COMPRA</button>            
     
      </div>

      <div className="finish__bottom">
        <Discount />
      </div>
 

    </div>
  )
};

  export default Finish;
