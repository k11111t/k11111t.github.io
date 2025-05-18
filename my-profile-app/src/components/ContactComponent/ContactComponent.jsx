import React from 'react';
import styles from './ContactComponent.module.css';

const ContactComponent = () => {
    return (
        <section>
            <h1 className={styles.header}  id="contact">Contact Me</h1>
            <div className={styles.description}>
                <span >Email:</span>
                <a 
                    className={styles.whiteLink}
                    href="mailto:vhdang0@gmail.com" >
                    vhdang0@gmail.com
                </a>
            </div>
            <div className={styles.description}>
                <span>LinkedIn:</span>
                <a
                    className={styles.whiteLink}
                    href="https://www.linkedin.com/in/viet-hung-dang/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    linkedin.com/in/viet-hung-dang/
                </a>
            </div>
            <div className={styles.description}>
                <span>GitHub:</span>
                <a
                    className={styles.whiteLink}
                    href="https://www.github.com/k11111t"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    github.com/k11111t
                </a>
            </div>
        </section>
    );
};

export default ContactComponent;