import React from 'react'
import './styles/Loading.css'
import icon1 from './static/icon1.svg'
import icon2 from './static/icon2.svg'
import icon3 from './static/icon3.svg'
import icon4 from './static/icon4.svg'
import icon5 from './static/icon5.svg'
import './animation.js'

export default class Loading extends React.Component{
    render(){
        return(
            <div className='container'>
                <script src='./animation.js' type="text/javascript"/>
                <p className='main-text'>LOADING</p>
                <div className='flex-box'>
                    <img src={icon1} id = "icon1" className='flex-item icon'></img>
                    <img src={icon2} id = "icon2" className='flex-item icon'></img>
                    <img src={icon3} id = "icon3" className='flex-item icon'></img>
                    <img src={icon4} id = "icon4" className='flex-item icon'></img>
                    <img src={icon5} id = "icon5" className='flex-item icon'></img>
                </div>
            </div>
        );
    }

}