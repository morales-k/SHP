import React from 'react'

export default function Bogo() {
  const bogoStyle = {
    alignSelf: "flex-start",
    backgroundColor: "#dde9b7",
    writingMode: "vertical-rl",
    textTransform: "uppercase",
    fontWeight: "bold",
    borderRadius: "0 0 12px 12px",
    padding: "2% 0.2%",
    marginLeft: "-5%",
  };
  
  return (
    <span style={bogoStyle}>BOGO</span>
  )
}
