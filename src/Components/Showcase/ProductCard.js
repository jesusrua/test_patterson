import React, {useContext} from 'react';
import {CartContext} from '/Users/Jesus/Desktop/PRUEBA PATTERSON/test-patterson/src/CartContext.js';
import {Slide} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

//COMPONENTS

import RatingComponent from './RatingComponent';

const ProductCard = (props)=>{


  const [cart, setCart] = useContext(CartContext);



    const addToCart = ()=> {

      const product = {product: props.product}

      setCart(currentCart => [...currentCart, product]);

    }


 
  return(

    <div>

      <Slide index={props.index} >
        <div className="productCard">

          <div className="productCard__container">
            <div className="productCard__container__top__container">

              <div className="productCard__container__top__container__img">

                <img className="productCard__container__top__container__img__img" src={props.image} alt={props.image}/>
                <button className="productCard__container__top__container__img__button"><img onClick={addToCart} className="productCard__container__top__container__img__button__icon" src="./images/carrito.svg" alt="icono-carrito"/></button>
              
                <span className="productCard__container__top__container__img__rating"><RatingComponent className="productCard__container__top__container__img__rating"/> </span> 
                 
              </div>
              
            </div>

            <div className="productCard__container__bottom__container">
              <span className="productCard__container__bottom__container__title">{props.title}</span>
              <span className="productCard__container__bottom__container__price">{props.price} €</span>
            </div>

          </div>

        </div>      
      </Slide>

    </div>
  )
}

export default ProductCard;