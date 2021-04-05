import React, {useState, useEffect}  from 'react';
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


//COMPONENTS

import ProductCard from './ProductCard';

//SERVICES

// import ProductsService from '../../services/ProductsService';

const ProductCarousel = ()=>{

  const [productsList, setProductsList] = useState([])
  
  // const productsService = new ProductsService();

  // useEffect(() => {
  //  productsService.getAllProducts()
  //   .then ((result) => result)
  //   .then((allProducts) => setProductsList(allProducts))
  //   .catch((err) => console.log(err))
  // },[]);


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=4')
            .then(res =>res.json())
            .then(data => setProductsList(data))
            .catch((err) => console.log(err))
  }, [])

  return(

    <div className="productCarousel">

      {productsList.length === 0 

      ? <div>
          <FontAwesomeIcon icon={faSpinner}/>
        </div>

      :   <CarouselProvider
            naturalSlideWidth={50}
            naturalSlideHeight={70}
            totalSlides={4}
            visibleSlides={4}
            interval={1000}
            isPlaying={true}
            infinite={true}
          >

            <ButtonBack children >Back</ButtonBack>

              <Slider>

                {productsList.map((product, index)=>(

                    <ProductCard key={index} product={product} image={product.image} price={product.price} title={product.title}/>
                ))}


              </Slider>

            <ButtonNext>Next</ButtonNext>

          </CarouselProvider> 
        

      }

    </div>

  )
}

export default ProductCarousel;
