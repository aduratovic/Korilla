import { useState } from 'react'
import Recipts from '../data'
import SingleRecord from './SingleRecord'

const Records = () => {
  const [recipes, setRecipes] = useState(Recipts)

  return (
    <div className='recipe-list'>
      <ul>
        {recipes.map((singleRecipe, idx) => {
          return <SingleRecord recipe={singleRecipe} key={idx} />
        })}
      </ul>
    </div>
  )
}

export default Records
