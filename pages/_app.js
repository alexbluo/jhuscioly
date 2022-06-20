import Head from "next/head";
import Layout from "../components/Layout";
import "../globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* // TODO: figure out how to make favicon bigger */}
      <Head>
        <link rel="icon" href="/favicon.png" />
        {/* maybe add titles for each page as well */}
        <title>JHSOI</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// TODO: getstaticprops

export default MyApp;
