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
        <div className="flex flex-col gap-4 max-w-lg mx-auto bg-white bg-white p-6 rounded-lg shadow-md">
            <h1 className='flex justify-center'>
                Meal Generator
            </h1>
            <p>Input your daily calorie amount below to generate a meal plan for the day. Not sure what it is? Use the calorie calculator below!</p>
            <input
                type = "number"
                name = "calories"
                placeholder = "Calories (kcal)"
                className="border border-gray-300 p-2 rounded w-full"
                onChange={(event) => setCalories(event.target.value)}
            />
            <div className='flex justify-center'>
                <button onClick={fetchMealPlan} className="bg-green-500 text-white p-3 rounded w-50">
                    Generate Meal Plan
                </button>
            </div>
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