import React from 'react';

import styles from '../styles/main.scss';
import { classes } from '../utils';

export default function Header() {
    return (
        <header>
            <a href="/">
                <img src="images/header-logo.png" alt="Troup Logo" className={styles.logo} />
            </a>

            <ul className={styles.nav}>
                <a className={styles.nav__item} href="https://github.com/troup-io">
                    <li>Featuress</li>
                </a>
                <a className={styles.nav__item} href="https://spectrum.chat/troup">
                    <li>Join Chat</li>
                </a>
                <a
                    className={classes(styles.nav__item, styles.nav__item__primary)}
                    href="https://github.com/troup-io"
                >
                    <li>Contribute</li>
                </a>
            </ul>
        </header>
    );
}
