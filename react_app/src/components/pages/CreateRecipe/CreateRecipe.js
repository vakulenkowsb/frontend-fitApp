import React, { useEffect, useState } from 'react';
import './CreateRecipe.css';
import Container from '../../Container';

const CreateRecipe = () => {
  const [selectedItems, setSelectedItems] = useState({
    likes: [],
    dislikes: [],
  });

  const handleItemClick = (type, item) => {
    const items = selectedItems[type];
    setSelectedItems({
      ...selectedItems,
      [type]: items.includes(item)
        ? items.filter((i) => i !== item)
        : [...items, item],
    });
  };

  useEffect(() => {
    console.log(JSON.stringify(selectedItems))
  }, [selectedItems]);

  const products = ['Oats', 'Bananas', 'Carrots', 'Eggs', 'Berries', 'Honey', 'Nuts', 'Rice'];

  const handleButtonClick = async (e) => {
    e.preventDefault();

    const dataToSend = {
      likes: selectedItems.likes,
      dislikes: selectedItems.dislikes,
    };

    try {
      const response = await fetch('https://your-api-route/calculate-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Recipe created:', result);
      } else {
        console.error('Error creating recipe:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };

  return (
    <main className='recipe-main'>
      <div className="recipe-creation">
        <Container>
          <div className='recipe-creation__container'>
            <h1 className="recipe-creation__title">Your daily calorie intake</h1>
            <p className="recipe-creation__calories">3200 calories</p>

            <div className="recipe-creation__sections">
              <div className="recipe-creation__section recipe-creation__section--liked-products">
                <h2 className="recipe-creation__section-title">Wanted products</h2>
                <div className="recipe-creation__item-list">
                  {products.map((product) => (
                    <button
                      key={product}
                      className={`recipe-creation__item recipe-creation__liked-item ${selectedItems.likes.includes(product) ? 'recipe-creation__liked-item--selected' : ''}`}
                      onClick={() => handleItemClick('likes', product)}
                    >
                      {product}
                    </button>
                  ))}
                </div>
              </div>

              <div className="recipe-creation__section recipe-creation__section--disliked-products">
                <h2 className="recipe-creation__section-title">Allergens or unwanted foods</h2>
                <div className="recipe-creation__item-list">
                  {products.map((product) => (
                    <button
                      key={product}
                      className={`recipe-creation__item recipe-creation__disliked-item ${selectedItems.dislikes.includes(product) ? 'recipe-creation__disliked-item--selected' : ''}`}
                      onClick={() => handleItemClick('dislikes', product)}
                    >
                      {product}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className='recipe-creation__section-calculate'>
            <input
              type="text"
              className="recipe-creation__input"
              placeholder="write your wishes for the recipes"
            />

            <button className="recipe-creation__create-button" onClick={handleButtonClick}>Create recipe</button>
          </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default CreateRecipe;
