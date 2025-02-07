const params = {
    timeFrame : "day",
    targetCalories : 2000,
};

const queryString = new URLSearchParams(params).toString();

const url = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day${queryString}`

async function getData() {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-api-key': 'ea414b2c64a44ac2aa9305ac65b24980'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error - status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Meals:', data.meals);
        console.log('Nutrients: ', data.nutrients);
        console.log('Full response:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getData();