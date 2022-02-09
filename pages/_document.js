import Document, { Html, Head, Main, NextScript } from 'next/document'

class NextDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

            {/** Google Fonts */}
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@700&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body className="font-sans font-normal text-tiny md:text-lg md:leading-7">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument