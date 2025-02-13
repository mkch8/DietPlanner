import React from 'react'
import Header from './components/header';
import Welcome from './components/Welcome';
import TDEECalculator from './components/TDEECalculator';
import MealGenerator from './components/MealGenerator';
// import MealPlanForm from './components/MealPlanForm';


const App = () => {
  return (
    <div className="flex flex-col space-y-6 bg-gray-100 min-h-screen">
      <div>
        <Header />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <TDEECalculator />
      </div>
      <div>
        <MealGenerator />
      </div>
    </div>
  )
}

export default App
