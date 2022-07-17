import Head from "next/head";
import Footer from "../components/Footer";
import "../globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* // TODO: figure out how to make favicon bigger */}
      <Head>
        {/* maybe add titles for each page as well */}
        <title>JHSOI</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* test navbar here for 404, might not work as expected with react scroll? */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
