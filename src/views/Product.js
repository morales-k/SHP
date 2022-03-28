import React from 'react';
import ProductInfo from './ProductInfo';
import Rating from './Rating';
import BogoBanner from './BogoBanner';
import AddToCartBtn from './AddToCartBtn';

export default function Product(props) {
  return (
    <>
    <div className='product'>
      <img src={props.productInfo.img} alt={props.productInfo.title} type="image/jpeg" />
      <Rating productInfo={props.productInfo} />
      <ProductInfo productInfo={props.productInfo} />
      <AddToCartBtn />
    </div>
    {
      props.productInfo.bogo ? <BogoBanner /> : null
    }
    </>
  )
}
