import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import AppComponent from "@/components/AppComponent";


// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import UserState from "@/context/auth/UserState";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {

  return (
    <>
      <UserState>
        <AppComponent Component={Component} pageProps={pageProps}/>
      </UserState>
    </>
  );
}
