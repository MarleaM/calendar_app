import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from './components/Calendar'
const App = () => {

  return (
    <div className = "App">
      <h1>
        Calendar App
      </h1>
      <h2>
        This is my cool calendar app
      </h2>
      <h2>
        Anti-Recomended      
      </h2>
      <Calendar /> 
      <h2>
        Recomended      
      </h2>
        <Calendar /> 
    </div>

  )

}

export default App