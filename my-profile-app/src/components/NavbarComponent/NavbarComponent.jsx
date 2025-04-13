import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './NavbarComponent.module.css';

const NavbarComponent = () => {
    const toggleNavbar = () => {
        setNavbarVisible(!navbarVisible);
    };

    const [navbarVisible, setNavbarVisible] = useState(window.innerWidth > 768);

    return (
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
                    <AnimatePresence> 
                        {(navbarVisible &&
                            <motion.nav
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ul className={styles.navbarNav}>
                                    <li className={styles.navItem}>
                                        <a className={styles.navLink} href="#about">About</a>
                                    </li>
                                    <li className={styles.navItem}>
                                        <a className={styles.navLink} href="#experience">Experience</a>
                                    </li>
                                    <li className={styles.navItem}>
                                        <a className={styles.navLink} href="#projects">Projects</a>
                                    </li>
                                    <li className={styles.navItem}>
                                        <a className={styles.navLink} href="#contact">Contact</a>
                                    </li>
                                    {/* <li className={styles.navItem}>
                                        <a href="/resume.pdf" className={styles.resumeButton}>Resume</a>
                                    </li> */}
                                </ul>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    )
}

export default NavbarComponent;