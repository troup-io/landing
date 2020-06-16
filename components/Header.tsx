import React from 'react';

import styles from '../styles/main.scss';
import { classes } from '../utils';

export default function Header() {
    return (
        <header>
            <a href="/">
                <img src="images/header-logo.svg" alt="Troup Logo" className={styles.logo} />
            </a>
        </header>
    );
}
