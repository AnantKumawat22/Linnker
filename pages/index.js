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
      <Script src="assets/js/main.js"></Script>

      {/* <!-- Vendor JS Files --> */}
      {/* <Script src="assets/vendor/purecounter/purecounter_vanilla.js"></Script>
      <Script src="assets/vendor/aos/aos.js"></Script>
      <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/vendor/glightbox/js/glightbox.min.js"></Script>
      <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
      <Script src="assets/vendor/swiper/swiper-bundle.min.js"></Script>
      <Script src="assets/vendor/php-email-form/validate.js"></Script> */}
      <HomePage />
    </>
  );
}
