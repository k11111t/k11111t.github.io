import React from 'react';
import styles from './AboutComponent.module.css';

const AboutComponent = () => {
    return (
        <div>
            <h1 className={styles.header}>About Me</h1>
            <p className={styles.description}>
            I'm Viet Hung Dang, a software engineer based in Manchester with a First Class BSc in Computer Science from 
            The University of Manchester. I started programming in high school, and that passion turned into a career 
            focused on building and optimizing full-stack applications.
            </p>
            <p className={styles.description}>
            Currently, I work at Betfred developing scalable solutions, including for Raspberry Pi devices. 
            Previously, I enhanced warehouse systems at Dematic, ensuring performance and reliability for clients like ASOS.
            </p>

        </div>

    );
};

export default AboutComponent;