import React from 'react'

export default function Rating(props) {
  const ratingStyle = {
    margin: "4% 0",
    fontWeight: "bold"
  };

  const allStarsStyle = {
    color: "var(--green)"
  }

  return (
    <p style={ratingStyle}>
      <span style={props.productInfo.stars === 5 ? allStarsStyle : null} className={props.productInfo.stars < 5 ? 'partial-stars' : ''}>
          ★★★★★
      </span> {props.productInfo.reviews}
    </p>
  )
}
