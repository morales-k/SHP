import React from 'react'

export default function ProductInfo(props) {
  const titleStyle = {
    fontWeight: "bold",
    paddingBottom: "4%",
  };
  
  const priceStyle = {
    fontWeight: "bold",
    paddingTop: "12%",
    paddingBottom: "2%",
    fontSize: "1rem"
  };

  return (
    <>
      <p>{props.productInfo.type}</p>
      <p style={titleStyle}>{props.productInfo.title}</p>
      <p>{props.productInfo.dosage ? props.productInfo.dosage : <br />}</p>
      <p style={priceStyle} className={props.productInfo.bogo ? 'red' : ''}>{props.productInfo.price}</p>
    </>
  )
}
