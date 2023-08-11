"use client"
import React, { useEffect } from 'react'
import Script from "next/script"
import Head from 'next/head'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aos() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <Head>
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
            </Head>
            <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js" strategy="afterInteractive"
            />
        </div>
    )
}
