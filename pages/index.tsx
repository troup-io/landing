import { useState } from 'react';
import Head from 'next/head';

import Background from '../components/Background';
import Header from '../components/Header';
import Content from '../components/Content';

import styles from '../styles/main.scss';

export default function Home() {
    const [accepted, setAccepted] = useState(
        typeof window !== 'undefined' && !window.localStorage.getItem('troup-cookie-accept')
    );

    const acceptCookies = () => {
        window.localStorage.setItem('troup-cookie-accept', 'yes');
        setAccepted(true);
    };

    return (
        <div id={styles.wrapper}>
            <Background />
            <div id={styles.root}>
                <Head>
                    <title>Troup - Simplifying everything about teamwork.</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                        key="viewport"
                    />
                </Head>
                <Header />
                <Content />
                <footer>
                    <a href="http://hub.troup.io">GitHub</a>
                    <a href="http://chat.troup.io">Chat</a>
                    <a href="http://twitter.com/troup_app">Twitter</a>
                </footer>
                {!accepted && (
                    <div id={styles.cookiePolicy}>
                        We collect cookies 🍪 to serve you better. By visiting this site you agree
                        to the collection of the same.
                        <span onClick={acceptCookies}>I agree</span>
                    </div>
                )}
            </div>
        </div>
    );
}
