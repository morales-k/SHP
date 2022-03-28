import React from 'react'
import Product from './Product'

// Images
import buildBasketBanner from '../images/Hero.webp';
import hpTurmeric from '../images/HP_Turmeric.webp';
import hpMagnesium from '../images/HP_Magnesium.webp';
import hpPrebiotics from '../images/HP_Prebiotics.webp';
import d3 from '../images/SW1371.webp';
import zinc from '../images/SW1113.webp';
import probiotic from '../images/SWA051.webp';
import deliveryIns from '../images/DELIVERYINS01.webp';
import turmeric from '../images/SW1613.webp';

export default function StoreFront() {
  const allProducts = [
    {
      img: d3,
      stars: 5,
      reviews: '(440)',
      bogo: false,
      type: 'Swason Premium',
      title: 'Vitamin D3 - Highest Potency',
      dosage: '5,000 IU 250 Sgels',
      price: '$10.99'
    },
    {
      img: zinc,
      stars: 5,
      reviews: '(95)',
      starsAll: true,
      bogo: false,
      type: 'Swason Premium',
      title: 'Zinc Picolinate - Body Preferred Form',
      dosage: '22 mg 60 Caps',
      price: '$2.59'
    },
    {
      img: probiotic,
      stars: 4.5,
      reviews: '(823)',
      starsAll: false,
      bogo: true,
      type: 'Swanson Probiotics',
      title: "Dr.Stephen Langer's Ultimate 16 Strain Probiotic with FOS",
      dosage: '3.2 Billion CFU 60 Veg Drcaps',
      price: '2 for $14.79'
    },
    {
      img: deliveryIns,
      stars: 4.5,
      reviews: '(78)',
      starsAll: false,
      bogo: false,
      type: 'Swanson Health Products, Inc.',
      title: 'DELIVERY INSURANCE',
      dosage: '',
      price: '$1.00'
    },
    {
      img: turmeric,
      stars: 4.5,
      reviews: '(238)',
      starsAll: false,
      bogo: true,
      type: 'Swason Premium',
      title: 'Turmeric & Black Pepper',
      dosage: '60 Veg Caps',
      price: '2 for $13.99'
    },
  ];

  return (
    <div className="store-wrapper">
      <img src={buildBasketBanner} alt="Build a Basket and Save." type="image/jpeg" />
      <div className="shop-now">
        <img src={hpTurmeric} alt="Shop Turmeric" type="image/jpeg" />
        <img src={hpMagnesium} alt="Shop Magnesium" type="image/jpeg" />
        <img src={hpPrebiotics} alt="Shop Prebiotics and Probiotics" type="image/jpeg" />
      </div>
      <div className="suggest">
        <span></span>
        <h1>You May Like</h1>
        <span></span>
      </div>
      <div className="product-container">
        {
          allProducts && allProducts.map(product => {
            return(
              <Product key={product.img} productInfo={product} />
            );
          })
        }
      </div>
    </div>
  )
}
