import React from 'react'

const ProductDetails = ({productName,productImage,productDescription,productPrice,stock}) => {

    

  return (
    <article className={`product ${stock ? "" : 'outOfStock'}`}>
        <img src={productImage} alt={productName}/>
        <h2>{productName}</h2>
        <p>{productDescription}</p>
        <p>${productPrice}</p>

        <button>
            {stock ? 'Add to cart' : "Out of stock"}
        </button>
    </article>
  )
}

export default ProductDetails