import React from 'react';
import styles from './ProjectsComponent.module.css';

const ProjectsComponent = () => {
    return (
        <div>
            <h1 className={styles.header}>Projects</h1>

            <h2 className={styles.subheader}>
                Virtual Map
            </h2>
            <p className={styles.description}>
                This is a virtual map application developed using Javascript, Node.js , PHP. 
                It allows users to explore different locations and view information about them. 
                The project uses Mapbox API for displaying maps and has a clean and responsive UI.
            </p>

            <h2 className={styles.subheader}>
                Multiplayer Card game
            </h2>
            <p className={styles.description}>
                This is a multiplayer card game developed using Node.js, PHP, Javascript. 
                It allows users to play card games with friends in real-time. 
                The project uses WebSocket for real-time communication and has a clean and responsive UI.
            </p>

        </div>

    );
};

export default ProjectsComponent;