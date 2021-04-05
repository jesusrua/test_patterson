import React from 'react'


const Discount = () => {


  return(
    <div className="discount">
      <form className="discount__form">
        <span className="discount__form__text">Código de descuento</span>
        <input className="discount__form__input" type="text" placeholder="Introduce tu códido"></input>
        <button className="discount__form__button" type="submit">APLICAR</button>
      </form>
      
    </div>
  )
};

  export default Discount;
