import Head from 'next/head';

import styles from '../styles/main.scss';

const Home = () => (
    <div className={styles.container}>
        <Head>
            <title>Troup - Simplifying everything about teamwork.</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        </Head>

        <main className="container">
            <img src="./logo.svg" width="150" alt="Troup Logo" />
        </main>
    </div>
);

export default Home;
