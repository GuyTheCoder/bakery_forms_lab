import { useState } from "react";

const NewCake = ({onSubmit}) => { 
    const [name,setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [rating, setRating] = useState(0);

    const handleNameChange = (event)=>{
        setName(event.target.value);
    }

    const handleIngredientChange = (event) => {
        setIngredients(event.target.value);
    }

    const handleRatingChange = (event) => {
        setRating(event.target.value);
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();
    }

    const newCake = {
        name: name,
        ingredients: ingredients,
        rating: rating,
    }
    onSubmit(newCake)

    return (
        <form onSubmit={handleFormSubmission}>
            <label htmlFor="name">Name: </label>
            <input 
                type="text"
                id="name"
                onChange={handleNameChange}
                
            />
            <label htmlFor="ingredients">Ingredients:</label>
            <input 
            type="text"
            id="ingredients"
            onChange={handleIngredientChange}
    
            />
            <label htmlFor="rating">Rating:</label>
            <input
            type="number"
            id="rating"
            onChange={handleRatingChange}
            />
            <input type="submit" value="Add Cake"/>
        </form>
        );    
    }

    
export default NewCake;
