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

  // const items = {
  //   0: 'Resume',
  //   1: 'About',
  //   2: 'Contact',
  // }

  const handleClick = async() => {
      setDropdown(!dropdown)
      await new Promise(resolve => setTimeout(resolve, 100));
      setShow(!show);
  }

  if(window.innerWidth >= 600)
    return (
      <> 
        <canvas id='canvas'></canvas>
        <script src="Background.js"></script>
          <div className='container'>
            <div className='column-container'>
              <img onClick={handleClick} alt={pain} src={self} className="image"></img>
              <Dropdown animate={dropdown} show={show} changeTab={setTab} activeTab={tab}/>
            </div>
            <div className='info-tab'>
              <Info activeTab={tab}/>
            </div>

          </div>
      </>
    );
  else{
    return (
      <> 
        <canvas id='canvas'></canvas>
        <script src="Background.js"></script>
        <div className='container mobile'>
          <div className='column-container mobile'>
            <img onClick={handleClick} alt={pain} src={self} className="image"></img>
            <Dropdown animate={dropdown} show={show} changeTab={setTab} activeTab={tab}/>
            <div className='info-tab mobile'>
              <Info activeTab={tab}/>
            </div>
          </div>

        </div>
      </>
    )
  }
}

export default App;
