import React from 'react'
import '../styles/Bar.css'

export default class Bar extends React.Component{
    render(){
        return(
            <div className='flex-box'>
                <p className='flex-item main-text'>About</p>
                <p className='flex-item main-text'>Resume</p>
                <p className='flex-item main-text'>Contact</p>
            </div>
        );
    }

}