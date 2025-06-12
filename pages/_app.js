import "@/styles/globals.css";
import "../styles/globals.css";
import Footer from "@/src/components/footer/footer";
import Head from "next/head";
import Header from "@/src/components/header/header";
// import "../styles/vendor/lineicons.css";
// import "../styles/vendor/fontawesome.css";
// import "../styles/all.main.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Grand Events</title>
        <link
          rel="stylesheet"
          href="https://cdn.lineicons.com/3.0/lineicons.css"
        />

        <meta
          name="description"
          content="This is a sample Next.js application with a global layout including a navigation bar and footer."
        />
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pOa8I7fg1eZxGzZ+8cLlfkQECujloW1sPqA2t82z6+9fRvkPqELBzmZ6h7TvRPHB+Er8t5TVh0V3R9a+2T2vXg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        /> */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          media="print"
          onLoad="this.media='all'"
          // integrity="sha512-pOa8I7fg1eZxGzZ+8cLlfkQECujloW1sPqA2t82z6+9fRvkPqELBzmZ6h7TvRPHB+Er8t5TVh0V3R9a+2T2vXg=="
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
