import Head from "next/head";
import Script from "next/script";
import HomePage from "./homePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <Script src="https://kit.fontawesome.com/4c63e30e23.js" crossorigin="anonymous"></Script>
      </Head>

      <HomePage/>
    </>
  );
}
