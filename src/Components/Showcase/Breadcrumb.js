import React from 'react';
import {Breadcrumb} from 'react-bootstrap';

const BreadcrumbComponent = ()=>{

  return(

    <div className="breadcrumb__container">
     
      <Breadcrumb>
        <Breadcrumb.Item active>Todos Los Productos</Breadcrumb.Item>
        <Breadcrumb.Item >Moda</Breadcrumb.Item>
        <Breadcrumb.Item >Moda Masculina</Breadcrumb.Item>
      </Breadcrumb>


    </div>
  )
}

export default BreadcrumbComponent;