import React from 'react';

const Product = ({product,handleClick}) => {
    const { id, productName, price, productImage } = product;
    return (
        <div className="product">
        <img src={productImage} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
        </div>
        <button className="addToCartBttn" onClick={()=>handleClick(product)}>
          Add To Cart 
        </button>
      </div>
    );
};

export default Product;