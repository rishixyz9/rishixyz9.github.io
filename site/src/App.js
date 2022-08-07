import './App.css';
import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown';
import pain from './pain.png'
import './Background.js'

function App() {   

  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = async() => {
      setDropdown(!dropdown)
      await new Promise(resolve => setTimeout(resolve, 100));
      setShow(!show);
  }

  return (
    <>
      <canvas id='canvas'></canvas>
      <script src="Background.js"></script>
      {dropdown &&
        <div className='container'>
          <div className='column-container'>
            <img onClick={handleClick} src={pain} className="image"></img>
            <Dropdown animate={dropdown} show={show}/>
          </div>
        </div>
      } 
    </>

  );
}

export default App;
