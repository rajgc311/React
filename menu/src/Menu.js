import React from 'react'

export default function (props) {
  const handleClick=()=>{
    alert('Item Added Successfully')
  }
  return (

    <div className="main">
    <div className="cards">
        <div className="image">
            <img src={props.img} alt="" />
            
        </div>
        <div className="title">
            <h2>{props.title}</h2>
           <h3> {props.desc}</h3>
            <button onClick={handleClick}>Add to cart</button>
        </div>
    </div>
    </div>
  )
}
