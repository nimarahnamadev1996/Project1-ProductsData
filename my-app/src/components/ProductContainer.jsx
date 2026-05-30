import React from 'react'
import { products } from '../data/products'
import ProductDetails from './ProductDetails'

const ProductContainer = () => {

     const productLength = products.length


  return (
    <main>
        {
            productLength > 0 ? (
                <section className="products">
                   {
                    products.map((product) => (
                        <ProductDetails {...product} key={product.productName}/>
                    ))
                   }
                </section>
            ): (
                <p className='noproducts'>Products will be available soon</p>
            )
        }
    </main>
  )
}

export default ProductContainer