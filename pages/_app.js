import Navbar from '@/components/Navbar'
import '@/styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'remixicon/fonts/remixicon.css';
import { useState, useEffect } from 'react';
import Alert from '@/components/Alert';

 // import Font Awesome CSS
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { config } from "@fortawesome/fontawesome-svg-core";
 config.autoAddCss = false;



export default function App({ Component, pageProps }) {

  const [alert, setAlert] = useState();
  
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  

  return <>
    <Navbar showAlert={showAlert} />
    <Alert alert={alert} />
    <Component showAlert={showAlert}  {...pageProps} />
  </>
}
