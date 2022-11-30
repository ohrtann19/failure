
import './App.css';
import performMap from './assets/failed-map.json'
import Perform from './components/Perform'
import React, { useState } from "react";

function App() {
  // const [active, setActive] = useState(false);

  // const handleClick = (item) => {
  //   setActive(active ? active : !active);
  // };

  return (
    <div className="App">
      <h1>Computers Performing</h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        {performMap.map((item) => (
          <Perform item={item}></Perform>
          
               
          ))}
    </div>
  );
}

export default App;
