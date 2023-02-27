import React, { useState } from 'react';
import FlipCard from './components/FlipCard';
import './App.css';
import recipes from './components/Recipes';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = searchTerm === ''
    ? recipes
    : recipes.filter(recipe => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const hasMatchingName = recipe.name.toLowerCase().includes(lowerCaseSearchTerm);
      const hasMatchingIngredient = recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseSearchTerm));
      return hasMatchingName || hasMatchingIngredient;
    });

  const rows = [];
  for (let i = 0; i < Math.ceil(filteredRecipes.length / 3); i++) {
    const cols = [];
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      if (index >= filteredRecipes.length) break;
      cols.push(
        <div key={filteredRecipes[index].id} style={{ flex: '1 0 33%', padding: '10px' }}>
          <FlipCard recipe={filteredRecipes[index]} />
        </div>
      );
    }
    rows.push(<div key={i} style={{ display: 'flex', flexDirection: 'row' }}>{cols}</div>);
  }

  return (
    <div className="App">
      <div className="search-container">
        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search recipes" className="search-input" />
      </div>
      <div className="recipe-container">{rows}</div>
    </div>
  );
}

export default App;
