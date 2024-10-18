import React, { useEffect, useState } from 'react';
import './CreateRecipe.css';
import FoodItem from '../../FoodItem'

const CreateRecipe = () => {
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [unwantedFoods, setUnwantedFoods] = useState([]);
  const [someWishes, setSomeWishes] = useState('');
  const handleFoodClick = (e, name) => {
    e.preventDefault();
    if (selectedFoods.includes(name)) {
      setSelectedFoods(selectedFoods.filter((item) => item !== name));
    } else {
      setSelectedFoods([...selectedFoods, name]);
    }
  };

  const handleUnwantedFoodClick = (e, name) => {
    e.preventDefault();
    if (unwantedFoods.includes(name)) {
      setUnwantedFoods(unwantedFoods.filter((item) => item !== name));
    } else {
      setUnwantedFoods([...unwantedFoods, name]);
    }
  };
  const handleSomeWishesChange = (e) =>{
    setSomeWishes(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  useEffect(()=>{
    console.log('selected food:', selectedFoods, 'unwanted food:', unwantedFoods,  'user wishes:', someWishes)
  }, [selectedFoods, unwantedFoods, someWishes ])
  
  const foods = [
    'Oats',
    'Bananas',
    'Carrots',
    'Eggs',
    'Berries',
    'Honey',
    'Nuts',
    'Rice',
  ];

  return (
      <div className="page">
        <form>
        <div className="section">
          <h2>Products you would like to see in the dishes</h2>
          <div className="food-list">

            {/* Functional component which lists all the food items which user wants to see in the dishes */}
            {foods.map((food) => (
              <FoodItem
                key={food}
                name={food}
                isSelected={selectedFoods.includes(food)}
                handleClick={(e) => handleFoodClick(e, food)}
              />
            ))}
          </div>
        </div>
        <div className="section">
          <h2>Allergens or unwanted foods</h2>
          <div className="food-list">
             {/* Functional component which lists all the food items which user doesn't want to see in the dishes */}
            {foods.map((food) => (
              <FoodItem
                key={food}
                name={food}
                classes={'allergens'}
                isSelected={unwantedFoods.includes( food )}
                handleClick={(e) => handleUnwantedFoodClick(e, food)}
              />
            ))}
          </div>
        </div>
        <div className='section'>

         {/* Functional component which takes the user input*/}
            <input
            className=''
            type="text"
            value={someWishes}
            onChange={handleSomeWishesChange}
            placeholder="Enter your wishes"
            style={{ padding: '10px', marginRight: '10px' }}
            />
        
        </div>
        <div className='section'>
             {/* Functional button component which validates the data and sends it to the backend */}

            <button className="" type="submit" onClick={handleSubmit} style={{ padding: '10px' }}>
            Create Recipe
            </button>
        </div>
        </form>
      </div>
  );
};

export default CreateRecipe;