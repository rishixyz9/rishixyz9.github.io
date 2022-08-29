import React from "react";
import '../styles/Info.css'
import Data from './Data'
import PDF from '../static/rishabh-vemparala-resume.pdf';

function Info(props){

    const GenerateItems = () => {
        if(props.activeTab === 'Resume'){
            let data = Object.keys(Data['Resume']).map((item, index) =>{
                const SubItems = Data['Resume'][item].map((subItem, key) =>{
                    return(
                        <li key={key}>{subItem}</li>
                    )
                })
                return(
                    <div key={index}>
                        <p className="item">{item}</p>
                        <div className="subitem">
                            {SubItems}
                        </div>
                    </div>
                )
            })
            return(
                <>
                {data}
                <a className="subitem subitem-box" rel="noreferrer" target="_blank" href={PDF}>complete resume</a>
                </>
            )
        }
        else if(props.activeTab === 'Contact'){
            return Object.keys(Data['Contact']).map((item, index) =>{
                    return(
                        <div key={index}>
                            <p className="item">{item}</p>
                            <li className="subitem">{Data['Contact'][item]}</li>
                        </div>
                    )
            })
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