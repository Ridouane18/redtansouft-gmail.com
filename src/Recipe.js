import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className = {style.recipe}>
            <img src={image} alt="" className = {style.img}/>
            <h1>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient =>(
                  <li>{ingredient.text}</li>  
                ))}
            </ol>
        </div>

    );
}

export default Recipe;