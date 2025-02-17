import React from 'react'
import Header from './components/header';
import Welcome from './components/Welcome';
import TDEECalculator from './components/TDEECalculator';
import MealGenerator from './components/MealGenerator';

const App = () => {
  return (
    <div className="flex flex-col space-y-6 bg-blue-500 min-h-screen">
      <div>
        <Header />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <MealGenerator />
      </div>
      <div>
        <TDEECalculator />
      </div>
    </div>
  )
}

export default App
