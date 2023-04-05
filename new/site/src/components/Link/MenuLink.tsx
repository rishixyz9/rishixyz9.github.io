import React from 'react';
import styles from './link.module.css'

interface Props {
    link: string;
    name: string;
}

export default function MenuLink(props: Props) {

    return (
        <div className={`font-medium text-3xl text-white pl-4 pr-4 ${styles.link} flex flex-row ${styles.menulink}`}>
            <a className='z-10 align-middle' href={props.link}>{props.name}</a>
        </div>
    )
}
