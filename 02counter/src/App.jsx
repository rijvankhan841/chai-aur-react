import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  
    // let counter = 5;

    const addValue = () => {
      // console.log("Clicked",counter);
      // counter = counter + 1;
      
      if( counter < 25) {
         setCounter(counter + 1)
        }
        else{
          alert("value wont be increase now")
        }
    }

    const removeValue = () => {
     if (counter > 0){
       setCounter(counter - 1)
     }
     else{
      alert("value wont be decrease now")
     }
    }

  return (
    <>
      <h1> Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button 
      onClick = {addValue}
      > Add value {counter}</button>
      <br/>
      <button
      onClick = {removeValue}
      > Remove value {counter}</button>
      <p> footer : {counter}</p>

    </>
  )
}

export default App
