import React from 'react';

import styles from '../styles/main.scss';

import { classes } from '../utils';

export default function Content() {
    return (
        <main>
            <div className={styles.half}>
                <h1>Simplifying everything about teamwork.</h1>
                <h2>
                    Troup is an <strong>upcoming</strong> open source collaboration platform that
                    helps teams complete projects seamlessly.
                </h2>
                <ul data-hide="tablet-lower">
                    <li>
                        Spend <strong>no time</strong> setting up a process for your organization
                    </li>
                    <li>
                        A <strong>clear outline</strong> of your deliverables with transparency
                    </li>
                    <li>
                        <strong>Excellent collaboration</strong> between various teams through your
                        content
                    </li>
                </ul>
            </div>
            <div className={styles.half}>
                <img src="/images/people.svg" alt="People" />
            </div>
            <div className={classes(styles.half, styles.halfMobile)}>
                <ul>
                    <li>
                        Spend <strong>no time</strong> setting up a process for your organization
                    </li>
                    <li>
                        A <strong>clear outline</strong> of your deliverables with transparency
                    </li>
                    <li>
                        <strong>Excellent collaboration</strong> between various teams through your
                        content
                    </li>
                </ul>
            </div>
        </main>
    );
}
