import React from 'react';
import { Timer } from './Timer';
import './App.css';

function App() {
  navigator.serviceWorker.register('/sw.js');
  return (
    <div className="App">
      <h1 className='title'>TIMER APP</h1>
     <Timer />
    </div>
  );
}

export default App;
