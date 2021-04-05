import React from 'react';
import {Container} from 'react-bootstrap';

//COMPONENTS
import BreadcrumbComponent from './Breadcrumb';
import ProductCarousel from './ProductCarousel';

const Showcase = ()=>{

  return(

    <div className="showcase">

      <Container >

        <div className="showcase__navigation">
          <h2>Moda Masculina</h2>
          <BreadcrumbComponent/>          
        </div>

        <ProductCarousel/>        
      </Container>

    </div>
  
  )
}

export default Showcase;