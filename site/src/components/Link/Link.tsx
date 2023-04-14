import React from 'react';
import styles from './link.module.css'

interface Props {
    link: string;
    name: string;
    button: boolean;
}

export default function Link(props: Props) {

    switch(props.button){
        case true:
            return (
                <div className={`font-semibold text-md text-white pl-4 pr-4 ${styles.link} flex flex-row`}>
                    <a className='z-10 align-middle w-full cursor-pointer'>{props.name}</a>
                </div>
            )
        case false:
            return (
                <div className={`font-semibold text-md text-white pl-4 pr-4 ${styles.link} flex flex-row`}>
                    {props.link[0] === '#' &&
                    <a className='z-10 align-middle w-full' href={props.link}>{props.name}</a>}
                    {props.link[0] !== '#' &&
                    <a className='z-10 align-middle w-full' href={props.link} target="_blank" rel="noreferrer">{props.name}</a>}
                </div>
            )   
    }
}
