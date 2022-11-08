import { createContext, useState } from 'react';
import './App.css';
import Children from './component/Children';

export const colorContext = createContext()

function App() {
  const [color, setColor] = useState("black")

  const click = () =>{
    if(color === "black"){
      setColor("red")
    }else{
      setColor("black")
    }
  }


  return (
    <colorContext.Provider value={color}>
      <div className="App">
        <button onClick={click}>click</button>
        <Children color={color}/>
      </div>
    </colorContext.Provider>
  );
}

export default App;
