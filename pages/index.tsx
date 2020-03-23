import Head from 'next/head';

import Header from '../components/Header';
import Content from '../components/Content';

import '../styles/main.scss';

export default function Home() {
    return (
        <section>
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
        </section>
    );
}
