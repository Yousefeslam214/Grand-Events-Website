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

        <meta
          name="description"
          content="This is a sample Next.js application with a global layout including a navigation bar and footer."
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
