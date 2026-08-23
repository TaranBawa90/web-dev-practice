import './App.css';
import {useState} from "react";
function App(){
  let [num,setNumber]=useState(0);
  let [turn,setturn]=useState(1);
  function addition(){
      setNumber(num+turn);
      setturn(turn+1);
  }
  function reset(){
     setNumber(0);
     setturn(turn+1);
  }
  function subtract(){
      setNumber(num-turn);
      setturn(turn+1);
  }
  return(
    <>
    <h1>Counter App</h1>
    <div className='container'>
     <div className='box'>
      <h2 className='number'>{num}</h2>
      <div className='buttons'>
        <button id='add' className='add' onClick={addition}>Add</button>
        <button id='zero' className='reset' onClick={reset}>Reset</button>
        <button id='subtrt' className='sub' onClick={subtract}>Subtract</button>
      </div>
     </div>
    </div>

    </>
  )
}
export default App;