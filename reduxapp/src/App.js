import React from 'react'
import "./App.css";
import {useSelector,useDispatch} from 'react-redux';
import { Increment,Decrement } from './Action/index';

function App() {
  const myState = useSelector((state) => state.ChangeTheNumber)
  const dispatch =useDispatch();
  return (
    <>
      <div className='App-header'>
      <h1>Increment/Decrement counter.</h1>
      <h4>using React and Redux</h4>
      <div className='quantity'>
        <button className='quantity_minus' title='Decrement' onClick={()=>dispatch(Decrement())}><span>-</span></button>
        <input name='quantity' type="text" className="quintity_input" value={myState} disabled/>
        <button className='quantity_minus' title='Decrement' onClick={()=>dispatch(Increment())}><span>+</span></button>
      </div>
    </div>
    </>
  )
}

export default App