import React, { useState } from 'react'
import ComponentPomodoro from './components/ComponentPomodoro';
import ComponentShortbreak from './components/ComponentShortbreak';

const App = () => {
  const [menu, setMenu] = useState('Pomodoro');

  const switchMenu = (e) => {
    setMenu(e.target.value);

  }
  
  return (
    <div className='whole-container'>
      <h1>Pomodoro</h1>
      <div className='pomodoro-container'>
        <span>
        <button onClick={switchMenu} value='Pomodoro' className='pomodoroButton'>Pomodoro</button>
        <button onClick={switchMenu} value='Short Break' className='shortBreakButton'>Short Break</button>
        </span>
        <div>
          {
          menu === 'Pomodoro' ? <ComponentPomodoro/>:<ComponentShortbreak />
          }
        </div>
      </div>
      <div>
      {
          (menu === 'Pomodoro') ? <h2>Time to Work!</h2>: <h2>Time for Rest!</h2>
          }
      </div>
    </div>
  )
}

export default App;