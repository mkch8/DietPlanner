import axios from 'axios';
import React, { useState } from 'react';

const MealGenerator = () => {
    const [calories, setCalories] = useState('');
    const [mealPlan, setMealPlan] = useState(null);

    const fetchMealPlan = async () => {
        try {
            const response = await axios.post(
                'http://localhost:5555/getMeals',
                {inputCalories: calories}
            )

            console.log("Full response", response);
            console.log("Response data", response.data);

            setMealPlan(response.data.mealPlan)
            // console.log(mealPlan)
        } catch (err) {
            console.log("Error fetching meal plan", err);
        }
    };

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
            {mealPlan && (
                <div>
                    <ul>
                        {mealPlan.meals.map((meal, index) => (
                            <li key={index} className="mt-2">{meal.title}</li>
                        ))}
                    </ul>
                    <div>
                        <h2>Meal Plan Nutrition</h2>
                        <ul>
                            <li>Total Calories: {mealPlan.nutrients.calories}</li>
                            <li>Carbs: {mealPlan.nutrients.carbohydrates}</li>
                            <li>Fat: {mealPlan.nutrients.fat}</li>
                            <li>Protein: {mealPlan.nutrients.protein}</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MealGenerator;