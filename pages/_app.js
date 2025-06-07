import "@/styles/globals.css";
// pages/_app.js
import "../styles/globals.css";
import Nav from "@/src/components/nav/nav";
import Footer from "@/src/components/footer/footer";
import Head from "next/head";
import Header from "@/src/components/header/header";
// import HeaderSlider from "@/src/components/header/header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="This is a sample Next.js application with a global layout including a navigation bar and footer."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pOa8I7fg1eZxGzZ+8cLlfkQECujloW1sPqA2t82z6+9fRvkPqELBzmZ6h7TvRPHB+Er8t5TVh0V3R9a+2T2vXg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Header />
      {/* <Nav /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
