import React, { useEffect, useState } from 'react';

const TDEECalculator = () => {
  const [formData, setFormData] = useState({
    gender: 'male',
    weight: '',
    height: '',
    age: '',
    activityLevel: 'sedentary',
    goal: 'maintain',
    goalAmount: '',
  });

  const [tdee, setTDEE] = useState(null);

  useEffect(() => {
    console.log("Updated Form Data:", formData);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value
    });
  };

  const handleGoalSelection = (goal) => {
    setFormData({
        ...formData,
        goal,
        goalAmount: goal === 'maintain' ? '' : formData.goalAmount,
    });
  };

  const handleGoalAmountSelection = (amount) => {
    setFormData({
        ...formData,
        goalAmount: amount
    });
  };

  const handleGenderSelection = (gender) => {
    setFormData({
      ...formData,
      gender: gender
    })
  }

  const calculateTDEE = (e) => {
    if (e) e.preventDefault();

    const { gender, weight, height, age, activityLevel, goal, goalAmount } = formData;

    // Ensure valid inputs
    if (!weight || !height || !age) {
      alert("Please fill in all fields.");
      return;
    }

    // Convert inputs to numbers
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const ageNum = parseInt(age);

    // Calculate BMR
    let BMR = 10 * weightNum + 6.25 * heightNum - 5 * ageNum;
    console.log(BMR)

    // Adjust for gender
    if (gender === 'male') {
      BMR = BMR + 5
    }
    else {
      BMR = BMR - 161
    };

    // Activity level multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
    };

    // Get activity multiplier
    const activityFactor = activityMultipliers[activityLevel];

    // Calculate TDEE
    let calculatedTDEE = BMR * activityFactor;

    // Adjust for goal
    if (goal === 'lose') {
      const deficit = goalAmount ? parseFloat(goalAmount) * 250 : 0;
      calculatedTDEE -= deficit;
    } else if (goal === 'gain') {
      const surplus = goalAmount ? parseFloat(goalAmount) * 250 : 0;
      calculatedTDEE += surplus;
    }

    // Set TDEE state
    setTDEE(Math.round(calculatedTDEE));
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Calorie Calculator</h2>
      <form className="flex flex-col gap-4">
        {/* Gender Input */}
        <div className="grid grid-cols-2 items-center">
            <label className="text-right pr-4">Gender</label>
            <div className="flex gap-4">
              <button 
                type="button"
                className={`p-2 rounded w-20 ${
                  formData.gender === 'male' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleGenderSelection('male')}
              >
                Male
              </button>
              <button 
                type="button"
                className={`p-2 rounded w-20 ${
                  formData.gender === 'female' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
                onClick={() => handleGenderSelection('female')}
              >
                Female
              </button>
            </div>
        </div>

        {/* Weight Input */}
        <div className="grid grid-cols-2 items-center">
            <label className="text-right pr-4">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange} 
            />
        </div>
        
        {/* Height Input */}
        <div className="grid grid-cols-2 items-center">
            <label className="text-right pr-4">Height (cm)</label>
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange}
            />
        </div>
        
        {/* Age Input */}
        <div className="grid grid-cols-2 items-center">
            <label className="text-right pr-4">Age</label>
            <input
              type="number"
              name="age"
              placeholder="E.g. 25"
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange}
            />
        </div>

        {/* Activity Level Dropdown */}
        <div className="grid grid-cols-2 items-center">
            <label className="text-right pr-4">Activity Level</label>
            <select
              name="activityLevel"
              className="border border-gray-300 p-2 rounded w-full"
              onChange={handleChange}
            >
              <option value="sedentary">Sedentary</option>
              <option value="lightly_active">Lightly Active</option>
              <option value="moderately_active">Moderately Active</option>
              <option value="very_active">Very Active</option>
            </select>
        </div>

        {/* Goal Selection */}
        <div>
          <label className="block text-center font-semibold mb-2">What is your weight goal?</label>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className={`p-2 rounded w-24 ${
                formData.goal === 'maintain' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleGoalSelection('maintain')}
            >
              Maintain
            </button>
            <button
              type="button"
              className={`p-2 rounded w-24 ${
                formData.goal === 'lose' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleGoalSelection('lose')}
            >
              Lose
            </button>
            <button
              type="button"
              className={`p-2 rounded w-24 ${
                formData.goal === 'gain' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleGoalSelection('gain')}
            >
              Gain
            </button>
          </div>
        </div>

        {/* Weight buttons for "Lose" or "Gain" */}
        {(formData.goal === 'lose' || formData.goal === 'gain') && (
          <div>
            <label className="block text-center font-semibold mt-4">
              How much per week?
            </label>
            <div className="flex justify-center gap-4">
              {['0.25', '0.5', '0.75', '1'].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`p-2 rounded w-24 ${
                    formData.goalAmount === amount ? 'bg-green-500 text-white' : 'bg-gray-200'
                  }`}
                  onClick={() => handleGoalAmountSelection(amount)}
                >
                  {amount} kg
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Calculate Button */}
        <div className='flex justify-center gap-4'>
          <button onClick={calculateTDEE} className="bg-blue-500 text-center text-white p-3 rounded-md w-auto">
            Calculate
          </button>
        </div>

        {/* Display TDEE */}
        {tdee && <p className="text-center text-lg font-bold mt-4">Your goal is <span style={{color: '#ff0000'}}>{tdee}</span> calories per day!</p>}
      </form>
    </div>
  );
};

export default TDEECalculator;

