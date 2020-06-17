import React from 'react';
import App from 'next/app';
import Head from 'next/head';

export default class extends App {
    render(): JSX.Element {
        const { Component } = this.props;

        return (
            <>
                <Head>
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-JVQDE2B9T4"
                    ></script>
                    <script src="/scripts/ga.js"></script>
                </Head>
                <Component />
            </>
        );
    }
}
