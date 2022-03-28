import React from 'react'

export default function AddToCartBtn() {
  const addToCartStyle = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "var(--red)",
      color: "#fff",
      border: "none",
      padding: "3% 12%",
      textTransform: "lowercase",
      fontWeight: "bold"
  }
  
  return (
    <button style={addToCartStyle}>add to cart</button>
  )
}
