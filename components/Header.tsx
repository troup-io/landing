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
                    <li>Features</li>
                </a>
                <a
                    className={classes(
                        styles.nav__item,
                        styles.nav__item__primary,
                        styles.nav__item__mobile
                    )}
                    href="https://github.com/troup-io"
                >
                    <li>Contribute</li>
                </a>
                <a
                    className={styles.nav__item}
                    href="https://github.com/orgs/troup-io/teams/discussions"
                >
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
