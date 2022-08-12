import './styles/App.css';
import React, { useState } from 'react'
import Dropdown from './components/Dropdown';
import Info from './components/Info';
import pain from './static/pain.png'
import self from './static/self-pic.jpg'
import './scripts/Background.js'

function App() {   

  const [dropdown, setDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const [tab, setTab] = useState('');

  const handleClick = async() => {
      setDropdown(!dropdown)
      await new Promise(resolve => setTimeout(resolve, 100));
      setShow(!show);
  }

  return (
    <> 
      <canvas id='canvas'></canvas>
      <script src="Background.js"></script>
        <div className='container'>
          <div className='column-container'>
            <img onClick={handleClick} alt={pain} src={self} className="image"></img>
            <Dropdown animate={dropdown} show={show} changeTab={setTab}/>
          </div>
          <div className='info-tab'>
            <Info activeTab={tab}/>
          </div>

        </div>
    </>

  );
}

export default App;
