import React, { useEffect, useState } from 'react';

const MealGenerator = () => {
    const [calories, setCalories] = useState ('');

    const fetchMealPlan = (calories) => {
        
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <h1>Meal Generator</h1>
            <input
                type = "number"
                name = "calories"
                placeholder = "Calories (kcal)"
                className="border border-gray-300 p-2 rounded w-full"
                onChange={(event) => setCalories(event.target.value)}
            />
            <button onClick={fetchMealPlan} className="bg-green-500 text-white p-3 rounded w-full">
                Generate Meal Plan
            </button>
        </div>
    );
};

export default MealGenerator;