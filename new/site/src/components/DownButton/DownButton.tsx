import React from 'react';
import styles from './downbutton.module.css'

interface Props {
    next: string;
}

export default function DownButton(props: Props) {

    return (
        <div className='flex items-center justify-center mt-auto'>
            <a href={`#${props.next}`}>
                <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M 25 25 L 0 0" stroke="rgb(0, 208, 255)" id={styles.left}/>
                    <path d="M 25 25 L 50 0" stroke="rgb(0, 208, 255)" id={styles.right}/>
                </svg>
            </a>


        </div>

    )
}
