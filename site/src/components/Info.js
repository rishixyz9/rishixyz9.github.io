import React from "react";
import '../styles/Info.css'
import Data from './Data'
import PDF from '../static/rishabh-vemparala-resume.pdf';

function Info(props){

    const GenerateItems = () => {
        if(props.activeTab === 'resume'){
            let data = Object.keys(Data['resume']).map((item, index) =>{
                const SubItems = Data['resume'][item].map((subItem, key) =>{
                    return(
                        <li key={key}>{subItem}</li>
                    )
                })
                return(
                    <>
                        <p className="item" key={index}>{item}</p>
                        <div className="subitem">
                            {SubItems}
                        </div>
                    </>
                )
            })
            return(
                <>
                {data}
                <a className="subitem" rel="noreferrer" target="_blank" href={PDF}>complete resume</a>
                </>
            )
        }
        else if(props.activeTab === 'contact'){
            let data = Object.keys(Data['contact']).map((item, index) =>{
                    return(
                        <>
                            <p className="item" key={index}>{item}</p>
                            <li className="subitem" key={index}>{Data['contact'][item]}</li>
                        </>
                    )
            })
            return data
        }
        else{
            return (
                <p>{Data[props.activeTab]}</p>
            )
        }
    }

    return(
        <>
            <div className="tab-header">
                {props.activeTab}
            </div>
            <div className="content">
                <GenerateItems className="content" />
            </div>
        </>

        )

    }


export default Info