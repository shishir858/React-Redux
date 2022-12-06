import React from 'react'
import "./App.css";

function App() {
  return (
    <>
      <div className='App-header'>
      <h1>Increment/Decrement counter.</h1>
      <h4>using React and Redux</h4>
      <div className='quantity'>
        <a className='quantity_minus' title='Decrement'><span>-</span></a>
        <input name='quantity' type="text" className="quintity_input" value={0} disabled/>
        <a className='quantity_minus' title='Decrement'><span>+</span></a>
      </div>
    </div>
    </>
  )
}

export default App