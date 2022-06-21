import Head from "next/head";
import Layout from "../components/Layout";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// TODO: getstaticprops
