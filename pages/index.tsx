import Head from 'next/head';

import Background from '../components/Background';
import Header from '../components/Header';
import Content from '../components/Content';

import styles from '../styles/main.scss';

export default function Home() {
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
            </div>
        </div>
    );
}
