import './App.css';
import React, { useState, useEffect } from 'react'
import Dropdown from './Dropdown';
import pain from './pain.png'


function Page() {

    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setDropdown(!dropdown);
     
    
    return (
      <div className="App">
        <a href='' onClick={handleClick}><img src={pain} className="image"></img></a>
        {dropdown && <Dropdown />}
      </div>
    );
 
}

export default Page