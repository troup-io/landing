import React from 'react';

import styles from '../styles/main.scss';
import { classes } from '../utils';

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
                <a
                    href="https://github.com/troup-io"
                    className={classes(
                        styles.button_group__button,
                        styles.button_group__button__primary,
                        styles.button_group__button__primary__mobile
                    )}
                >
                    Contribute
                </a>
                <a
                    href="https://github.com/orgs/troup-io/teams/discussions"
                    className={styles.button_group__button}
                >
                    Join Chat
                </a>
                <a
                    href="https://github.com/troup-io/troup-server"
                    className={classes(
                        styles.button_group__button,
                        styles.button_group__button__primary
                    )}
                >
                    Contribute
                </a>
                <a className={styles.button_group__button}>Features</a>
            </div>
            <img
                src="images/people.svg"
                className={styles.people}
                alt="Troup inculcating a mindset in people."
            />
        </main>
    );
}
