import Head from "next/head";

export default function HeadMeta({ title = "Developer's Book | Spread knowledge everywhere" }) {
    return (
        <Head>
            <title> {title} </title>
        </Head>
    )
}