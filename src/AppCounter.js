// create counter app
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);

  const increaseCounter = () => {
    if(!pause){
      setCounter((prevCounter) => prevCounter + 1);
    }    
  };

  // const stopCounter = () => {

  // }
  useEffect(() => {
    if(start) increaseCounter();
  }, [start, pause]);

  const startCounter = () => {
    setStart(true);
    setPause(false);
  };

  const pauseCounter = () => {
    setPause(true);
    setStart(false);

  };

  return (
    <div className="App">
      <center>
        <h1>Hello World! counter</h1>
        <div> counter: {counter} </div>

        <input type="button" onClick={pauseCounter()}> Pause </input>
        {/* <input type="button" onClick={startCounter()}> Start </input> */}
      </center>
    </div>
  );
}

export default App;
