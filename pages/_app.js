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
      </Head>
      <Header />
      {/* <Nav /> */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
