import Head from "next/head";
import Layout from "../components/Layout";
import "../globals.css";

function MyApp({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <>
      {/* // TODO: figure out how to make favicon bigger */}
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// TODO: getstaticprops

export default MyApp;
