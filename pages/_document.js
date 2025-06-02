import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* LineIcons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.lineicons.com/4.0/lineicons.css"
      />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
