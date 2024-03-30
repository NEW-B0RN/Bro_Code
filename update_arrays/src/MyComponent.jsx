import React, { useState } from 'react';

function MyComponent() {
    const [foods, setFoods] = useState(["apple", "banana", "cherry", "date", "elderberry"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        if (newFood !== "") {
            setFoods([...foods, newFood]);
        }
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <>
            <h2>List of food</h2>

            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter Food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </>
    );
}

export default MyComponent;