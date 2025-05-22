import React from 'react';
import styles from './MainComponent.module.css';
import NavbarComponent from '../NavbarComponent/NavbarComponent';
import AboutComponent from '../AboutComponent/AboutComponent';
import ProjectsComponent from '../ProjectsComponent/ProjectsComponent';
import TechStackComponent from '../TechStackComponent/TechStackComponent';
import ContactComponent from '../ContactComponent/ContactComponent';

const MainComponent = () => {
    return (
        <div className={styles.container}>
            <NavbarComponent />

            <main className={styles.hero}>
                <>
                    <p className={styles.intro}>Hi, my name is</p>
                    <h1 className={styles.name}>Viet Hung</h1>
                    <h2 className={styles.tagline}>I'm a fullstack software developer</h2>
                    <p className={styles.description}>
                        Experienced in C#.NET, Blazor, React.js, and Azure Cloud. I build scalable apps, write clean code, 
                        and thrive in agile teams—always eager to learn and take on new challenges.
                    </p>
                </>
                <AboutComponent />
                <TechStackComponent/>
                <ProjectsComponent />
                <ContactComponent />
            </main>

            
        </div>

        
    );
};

export default MainComponent;