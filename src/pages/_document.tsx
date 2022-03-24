import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="fonts/fonts.css" />
        </Head>
        <title>ジャンクフード×女性の写真展｜ムラカミリョウ</title>
        <meta property="og:title" content="Ryo Murakami Photo Exhibition" />
        <meta
          property="og:description"
          content="Original site of photo exhibition."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
