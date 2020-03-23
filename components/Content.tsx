import React from 'react';

import styles from '../styles/main.scss';

export default function Content() {
    return (
        <main>
            <h1>Simplifying everything about teamwork.</h1>
            <h2>
                Troup is an open source collaboration platform that helps teams
                <br />
                complete projects seamlessly.
            </h2>
            <h3>Coming soon.</h3>
            <div className={styles.button_group}>
                <button
                    className={`${styles.button_group__button} ${styles.button_group__button__primary} ${styles.button_group__button__primary__mobile}`}
                >
                    Contribute
                </button>
                <button className={styles.button_group__button}>Join Chat</button>
                <button
                    className={`${styles.button_group__button} ${styles.button_group__button__primary}`}
                >
                    Contribute
                </button>
                <button className={styles.button_group__button}>Features</button>
            </div>
            <img
                src="images/people.svg"
                className={styles.people}
                alt="Troup inculcating a mindset in people."
            />
        </main>
    );
}
