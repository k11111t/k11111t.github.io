import React from 'react';
import styles from './ContactComponent.module.css';

const ContactComponent = () => {
    return (
        <section>
            <h1 className={styles.header}  id="contact">Contact Me</h1>
            <div className={styles.description}>
                <span >Email:</span>
                <a href="mailto:your-email@example.com" >
                    your-email@example.com
                </a>
            </div>
            <div className={styles.description}>
                <span>LinkedIn:</span>
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin.com/in/your-profile
                </a>
            </div>
            <div className={styles.description}>
                <span>Phone:</span>
                <a href="tel:+1234567890">
                    +1 (234) 567-890
                </a>
            </div>
        </section>
    );
};

export default ContactComponent;