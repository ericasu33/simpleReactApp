import React from 'react';
import { Link } from 'react-router-dom'

export default function ProductCard(props) {
  return (
    <div className="productImageLayout">
      <Link to={`/products/${props.product.id}`}>
        <div
          style={{
            'backgroundImage': `url('${props.product.images[0].imageUrl}')`
          }}
          className="productImage"
        >
        </div>
      </Link>

      <div>
        <div className="productDetails">
          <h3>
            <Link 
              to={`/products/${props.product.id}`}
              className="productDetailsLink"
            >
              {props.product.name}
            </Link>
          </h3>
          <div>
            ${props.product.price}
          </div>
        </div>

        <div>
          {props.product.description}
        </div>

        <Link 
          to={`/products/${props.product.id}`}
          className="viewButton">
          View
        </Link>
      </div>
    </div>
  )
}

