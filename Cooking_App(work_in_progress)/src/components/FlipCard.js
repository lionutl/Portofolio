import React, { useState } from 'react';
import './FlipCard.css';

function FlipCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  const fullRecipeUrl = `${props.baseUrl}/food${props.recipe.id}`;

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={props.recipe.photo} alt={props.recipe.name} />
          <h2>{props.recipe.name}</h2>
          <p>Duration: {props.recipe.duration} mins</p>
          <a href={fullRecipeUrl} className="recipe-button">Recipe</a>
        </div>
        <div className="flip-card-back">
          <h3>Ingredients:</h3>
          <ul>
            {props.recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
