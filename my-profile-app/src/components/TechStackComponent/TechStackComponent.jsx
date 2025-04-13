import React from 'react';
import styles from './TechStackComponent.module.css';

const TechStackComponent = () => {
    return (
        <div>  
            <h1 className={styles.header}>Tech Stack</h1>
            
            <div className={styles.techStack}>
                <h3 className={styles.subHeader}>
                    Frontend
                </h3>
                <div className={styles.techList}>
                    <div className={styles.techItem}>HTML</div>
                    <div className={styles.techItem}>CSS</div>
                    <div className={styles.techItem}>JavaScript</div>
                    <div className={styles.techItem}>Blazor</div>
                    <div className={styles.techItem}>React.js</div>
                    <div className={styles.techItem}>Bootstrap</div>
                </div>
                <h3 className={styles.subHeader}>
                    Backend
                </h3>
                <div className={styles.techList}>
                    <div className={styles.techItem}>C#.NET</div>
                    <div className={styles.techItem}>Azure Function</div>
                    <div className={styles.techItem}>Azure Web App</div>
                    <div className={styles.techItem}>Node.js</div>
                    <div className={styles.techItem}>MySQL</div>
                </div>
                <h3 className={styles.subHeader}>
                    Development Tools
                </h3>
                <div className={styles.techList}>
                    <div className={styles.techItem}>Git</div>
                    <div className={styles.techItem}>Azure DevOps</div>
                    <div className={styles.techItem}>xUnit</div>
                    <div className={styles.techItem}>Moq</div>
                </div>
            </div>
            
        </div>
    );
};

export default TechStackComponent;