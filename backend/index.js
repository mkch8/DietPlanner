import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import getData from "./services/spoonacular.js";

const app = express();

app.use(express.json());

// Test route for server start
app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to the MERN Diet Planner API')
});

app.post('/getMeals',
    async (req, res) => {
        try {
            const { inputCalories } = req.body;
            const mealPlan = await getData(inputCalories);
            console.log(mealPlan);
            res.json({ mealPlan });

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