import Navbar from "@/components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import GeneralContextProvider from "@/context/general.context";
import "@/scss/custom.scss";
import "@/styles/globals.css";
import AuthContextProvider from "@/context/auth.context";
import GroupContextProvider from "@/context/group.context";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  // Router
  const router = useRouter();

  // Bottom to top Button State.
  const [bottomToTop, setBottomToTop] = useState(false);
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <GeneralContextProvider router={router}>
      <AuthContextProvider>
        <GroupContextProvider>
          <Navbar setBottomToTop={setBottomToTop} />
          <Component {...pageProps} />
          <Footer />
          <button
            style={{
              visibility: bottomToTop ? "visible" : "hidden",
              opacity: bottomToTop ? "1" : "0",
            }}
            className="back-to-top"
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
          </button>
        </GroupContextProvider>
      </AuthContextProvider>
    </GeneralContextProvider>
  );
}
