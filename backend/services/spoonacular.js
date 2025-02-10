async function getData(inputCalories) {
    const params = {
        timeFrame : "day",
        targetCalories : inputCalories,
    };
    
    const queryString = new URLSearchParams(params).toString();
    
    const url = `https://api.spoonacular.com/mealplanner/generate?timeFrame=day${queryString}`

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
        // console.log('Full response:', JSON.stringify(data, null, 2));
        return data;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// getData();