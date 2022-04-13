import React from 'react'
import './styles/Loading.css'

export default class Loading extends React.Component{
    render(){
        return(
            <div>
                <div className='flex-box'>
                    <div className='flex-item hexagon-item left-Top'></div>
                    <div className='flex-item hexagon-item middle-Top'></div>
                    <div className='flex-item hexagon-item right-Top'></div>
                </div>
                <div className='flex-box'>
                    <div className='flex-item hexagon-item left-Bottom'></div>
                    <div className='flex-item hexagon-item middle-Bottom'></div>
                    <div className='flex-item hexagon-item right-Bottom'></div>
                </div>
            </div>
        );
    }

}