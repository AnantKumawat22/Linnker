import Navbar from "@/components/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";

// React Top Loading Bar.
import LoadingBar from "react-top-loading-bar";

// Alert :- React-Toastify.
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import UserState from "@/context/auth/UserState";
import "@/scss/custom.scss"
import "@/styles/globals.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  // Router
  const router = useRouter();
  
  // Loading bar State and ref.
  const topLoaderBar = useRef(null);
  const [loaderProgress, setLoaderProgress] = useState(false);

  const showAlert = (msg, type) => {
    if (type == "error") {
      toast.error(`${msg}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success(`${msg}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      // Stop the loader
      setLoaderProgress(false);
      topLoaderBar.current.complete();
    });
  }, []);

  return (
    <>
      <UserState>
        <LoadingBar
          color="#4154f1"
          ref={topLoaderBar}
          progress={loaderProgress ? 50 : 0}
          waitingTime={10}
          onLoaderFinished={() => setLoaderProgress(false)}
        />
        <Navbar showAlert={showAlert} setLoaderProgress={setLoaderProgress} topLoaderBar={topLoaderBar} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Component
          setLoaderProgress={setLoaderProgress} topLoaderBar={topLoaderBar}
          showAlert={showAlert}
          {...pageProps}
        />
      </UserState>
    </>
  );
}