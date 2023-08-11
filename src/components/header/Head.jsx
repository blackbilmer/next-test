import Head from 'next/head'
export default async function IndexPage() {
    return (
        <>
            <Head>
                <title>My page title</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Head>
                <meta property="og:title" content="My new title" key="title" />
            </Head>
        </>
    )
}