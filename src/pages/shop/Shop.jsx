import React from 'react'
import { PRODUCTS } from '../../products'
import Product from '../../components/Product'
import './Shop.css'

function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Jiggly Shop</h1>
        </div>
        <div className='products'>
              {PRODUCTS.map((product)=>{
                return <Product 
                   id={product.id}
                   productName={product.productName}
                   productImage={product.productImage}
                   price={product.price}
                />
              })}
        </div>
    </div>
  )
}

export default Shop