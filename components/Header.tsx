import React from 'react';

import styles from '../styles/main.scss';

export default function Header() {
    return (
        <header>
            <a href="/">
                <img src="images/header-logo.png" alt="Troup Logo" className={styles.logo} />
            </a>

            <ul className={styles.nav}>
                <a className={styles.nav__item} href="https://github.com/troup-io">
                    <li>Docs</li>
                </a>
                <a className={styles.nav__item} href="https://github.com/troup-io">
                    <li>Contributing</li>
                </a>
                <a className={styles.nav__item} href="https://spectrum.chat/troup">
                    <li>Join Chat</li>
                </a>
            </ul>
        </header>
    );
}
