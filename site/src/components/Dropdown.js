import React from "react";
import '../styles/Dropdown.css'

function Dropdown(props){

    const items = {
        0: 'Resume',
        1: 'About',
        2: 'Contact',
    }

    const setActive = (item) => {
        if(item === props.activeTab){
            return "dropdown-item active"
        }
        return "dropdown-item"
    }

    if(props.show){
        return(
            <div className={`dropdown-wrapper ${props.animate}`}>
                {Object.keys(items).map((item, index) =>{

                    return (
                        <li key={index} className={setActive(items[item])} onClick={() => {props.changeTab(items[item])}}>{items[item]}</li>
                    )
                })}
            </div>
            )
        }

    }


export default Dropdown