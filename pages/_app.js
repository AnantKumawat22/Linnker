import Navbar from '@/components/Navbar'
import '@/styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css';
 // import Font Awesome CSS
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { config } from "@fortawesome/fontawesome-svg-core";
 config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
  </>
}
