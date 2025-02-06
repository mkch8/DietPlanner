import React from 'react'
import Welcome from './components/Welcome';
import TDEECalculator from './components/TDEECalculator';
// import MealPlanForm from './components/MealPlanForm';


const App = () => {
  return (
    <div className="flex flex-col items-center space-y-6 bg-gray-100 min-h-screen">
      <div className='bg-red-400 text-white'>App hello</div>
      <div>
        <Welcome />
      </div>
      <div>
        <TDEECalculator />
      </div>
    </div>
  )
}

export default App
