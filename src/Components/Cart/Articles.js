import React, {useContext} from 'react'
import {CartContext} from '../../CartContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'




const Articles = () => {

  const [cart, setCart] = useContext(CartContext)

  const removeArticle = (product)=>{
    setCart(currentCart => [...currentCart].filter(item => item !== product))
  }


  return(
    <div className="articles">

      {cart.length === 0 
      
      ? <div>
          <h5 className="articles__title">CARRITO</h5>
          <div className="articles__empty">
            <span className="articles__empty__text">EL CARRITO ESTÁ VACIO</span>            
          </div>

        </div>

      : <div>
      
          <h5 className="articles__title">CARRITO</h5>
          {cart.map((product, index)=>(
            <div key={index}>
              

              <div className="articles__full">
                <div className="articles__full__left">
                  <img className="articles__full__left__img" src={product.product.image} alt={product.product.title}/>
                </div>

                <div className="articles__full__right">
                  <span className="articles__full__right__name">{product.product.title}</span>
                  <span className="articles__full__right__price">{product.product.price} €</span> 

                  <button className="articles__full__right__button" onClick={()=>removeArticle(product)}><FontAwesomeIcon icon={faTrash}/></button> 
                </div>
               
              </div>
     
            </div>

          ))}

        </div>
      


      
      }


    </div>
  )
};

  export default Articles;
