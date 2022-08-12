import React, { useEffect, useState } from "react";
import './Dropdown.css'

function Dropdown(props){

    const items = {
        0: 'resume',
        1: 'about',
        2: 'contact',
    }

    if(props.show){
        return(
            <div className={`dropdown-wrapper ${props.animate}`}>
                {Object.keys(items).map((item, index) =>{
                    return (
                        <li key={index} className="dropdown-item" onClick={() => {props.changeTab(items[item])}}>{items[item]}</li>
                    )
                })}
            </div>
            )
        }

    }


export default Dropdown