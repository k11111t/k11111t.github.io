import React from 'react';
import styles from './MainComponent.module.css';

const MainComponent = () => {
    const toggleNavbar = () => {
        const collapse = document.querySelector(`.${styles.navbarCollapse}`);
        collapse.classList.toggle(styles.show);
    };

    return (
        <div className={styles.container}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <a className={styles.navbarBrand} href="#">VH</a>
                    <button
                        className={styles.navbarToggler}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <span className={styles.navbarTogglerIcon}></span>
                        <span className={styles.navbarTogglerIcon}></span>
                        <span className={styles.navbarTogglerIcon}></span>
                    </button>
                    <div className={styles.navbarCollapse}>
                        <ul className={styles.navbarNav}>
                            <li className={styles.navItem}>
                                <a className={styles.navLink} href="#about">About</a>
                            </li>
                            <li className={styles.navItem}>
                                <a className={styles.navLink} href="#experience">Experience</a>
                            </li>
                            <li className={styles.navItem}>
                                <a className={styles.navLink} href="#work">Work</a>
                            </li>
                            <li className={styles.navItem}>
                                <a className={styles.navLink} href="#contact">Contact</a>
                            </li>
                            <li className={styles.navItem}>
                                 <a href="/resume.pdf" className={styles.resumeButton}>Resume</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <main className={styles.hero}>
                <p className={styles.intro}>Hi, my name is</p>
                <h1 className={styles.name}>Viet Hung.</h1>
                <h2 className={styles.tagline}>I build things for the web.</h2>
                <p className={styles.description}>
                    I'm a frontend developer specializing in building exceptional digital experiences. 
                    Currently, I'm focused on creating accessible, human-centered products.
                </p>
                <a href="#work" className={styles.ctaButton}>Check out my work!</a>
            </main>
        </div>
    );
};

export default MainComponent;