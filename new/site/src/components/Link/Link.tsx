import React from 'react';
import styles from './link.module.css'

interface Props {
    link: string;
    name: string;
}

export default function Link(props: Props) {

    return (
        <div className={`font-semibold text-md text-white pl-4 pr-4 ${styles.link} flex flex-row`}>
            <a className='z-10 align-middle' href={props.link} target="_blank" rel="noreferrer">{props.name}</a>
        </div>
    )
}
