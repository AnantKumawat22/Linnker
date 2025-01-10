import Head from "next/head";
import Script from "next/script";
import HomePage from "./homePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linnker</title>
        <meta name="description" content="We make it easy to find best groups for you to join." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://kit.fontawesome.com/4c63e30e23.js"
        crossorigin="anonymous"
      ></Script>
      <HomePage />
    </>
  );
}
