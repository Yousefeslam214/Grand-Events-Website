import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Grand Events</title>
        {/* LineIcons CDN */}
        {/* <link
          rel="stylesheet"
          href="https://cdn.lineicons.com/4.0/lineicons.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdn.lineicons.com/4.0/lineicons.css"
          media="print"
          onLoad="this.media='all'"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
