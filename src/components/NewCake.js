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

    const newCake = {
        name: name,
        ingredients: ingredients,
        rating: rating,
    }
    onSubmit(newCake)
}