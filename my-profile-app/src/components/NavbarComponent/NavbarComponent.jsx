import styles from './NavbarComponent.module.css';

const NavbarComponent = () => {
    const toggleNavbar = () => {
        const collapse = document.querySelector(`.${styles.navbarCollapse}`);
        collapse.classList.toggle(styles.show);
    };

    return (
        <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <a className={styles.navbarBrand} href="#">Home</a>
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
                                <a className={styles.navLink} href="#projects">Projects</a>
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
    )
}

export default NavbarComponent;