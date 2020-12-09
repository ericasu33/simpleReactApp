import React, { useState, useEffect } from 'react';
import { useAxiosGet } from '../Hooks/HttpRequest'
import { useParams } from 'react-router-dom';

import Loader from '../Components/Loader'

export default function Product() {
  const { id } = useParams()
  const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`


  let product = useAxiosGet(url);
  let content = null;


  // const [product, setProduct] = useState({
  //   loading: false,
  //   data: null,
  //   error: false,
  // });

  // useEffect(() => {
  //   // Give loader prior to image being loaded
  //   setProduct({
  //     loading: true,
  //     data: null,
  //     error: false,
  //   })

  //   axios.get(url)
  //     .then(response => {
  //       setProduct({
  //         loading: false,
  //         data: response.data,
  //         error: false,
  //       })
  //     })
  //     .catch(() => {
  //       setProduct({
  //         loading: false,
  //         data: null,
  //         error: true,
  //       })
  //     })
  // }, [url])

  if (product.error) {
    content = <p>
      There was an error, please refresh or try again later
    </p>
  }

  if(product.loading) {
    content = <Loader />
  }

  if(product.data){
    content = 
      <div className="product">
        <h1>
          {product.data.name}
        </h1>
      
      
        <div className="productDetailImage">
          <img
            src={product.data.images[0].imageUrl}
            alt={product.data.name}
          />
        </div>
        
        <div className="productDetailPrice">
          $ {product.data.price}
        </div>

        <div className="productDetailDesc">
          {product.data.description}
        </div>
      </div>
  }

  return (
    <div>
      {content}
    </div>
  )
}