import React, { useState } from 'react'
import productsData from '../data/product.json'
import './Product.css'

import imageFolder from '../../assets/black_shoes.png';
// mapping product data
const Products = () => {

  return (
    <div className='products-container'>
    {productsData.map(product =>
    <div key={product.id} className='product'>
        {/* <img src=`../../assets/green_dress.png` alt={product.name}/> */}
        <div className='product-name'>{product.name}</div>
        <button className='yellow-button'>Add to Cart</button>
    </div>)}
    </div>
  )
}

export default Products
