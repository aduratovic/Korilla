import React from 'react'

const SingleRecord = ({ recipe }) => {
  return (
    <li>
      <h3>{recipe.person}</h3>
      <p>
        <span>Main:</span>
        {recipe.order.main}
      </p>
      <p>
        <span>Protein:</span>
        {recipe.order.protein}
      </p>
      <p>
        <span>Rice:</span>
        {recipe.order.rice}
      </p>
      <p>
        <span>Sauce:</span>
        {recipe.order.sauce}
      </p>
      <p>
        <span>Drink:</span>
        {recipe.order.drink}
      </p>
      <p>
        <span>Cost:</span>
        {recipe.order.cost}
      </p>
    </li>
  )
}

export default SingleRecord
