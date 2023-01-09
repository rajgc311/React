import React from 'react'

export default function Category({categories,filterItems}) {
  return (
    <div>
{categories.map((category, index)=>{
return(
  <button type='button' key={index} onClick={() => filterItems(category)}>{category}</button>
)
})}
    </div>
  )
}
