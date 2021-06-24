import Document, { Html, Head, Main, NextScript } from 'next/document'
const meta = {
    title: "Developer's Book - Blog Application for Developers",
    image: "/preview.png",
    url: "https://developerbook.vercel.app",
    description: "Developer's Book is personal blog application for coders"
}
class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    render() {
        return (
            <Html lang="en">
                <Head >
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        rel="stylesheet"
                        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    />
                    <link rel="stylesheet" href="/css/meanmenu.css" />
                    <meta
                        property="og:title"
                        content={meta.title}
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content={meta.image} />
                    <meta property="og:url" content={meta.url} />
                    <meta name="robots" content="follow, index" />
                    <meta name="description" content={meta.description} />
                    <meta property="og:site_name" content={meta.title} />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:image" content={meta.image} />
                    <meta name="twitter:card" content={meta.description} />
                    <meta name="twitter:site" content="@samayunmc" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta name="twitter:description" content={meta.description} />
                    <meta name="twitter:image" content={meta.image} />
                </Head>
                <body>
                    <script src="/script.js" defer></script>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;