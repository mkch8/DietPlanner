import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import getData from "./routes/spoonacular.js";

const app = express();

// Test route for server start
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to the MERN Diet Planner API')
});

app.post('/getMeals', async (req, res) => {
    try {
        const { inputCalories } = req.body;

        if (!inputCalories) {
            return res.status(400).json({ error: "Calories input is required"});
        }

        const mealPlan = await getData(calories);

        res.json({ mealPlan })

    } catch(error) {
        console.error("Error fetching meal data", error);
        res.status(500).json({error: "Failed to retrieve meals"});
    }
});

// connect to database
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () =>  {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });