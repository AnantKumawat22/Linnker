import React from "react";
import { useState, useEffect, useRef, useContext } from "react";
import { useRouter } from "next/router";
import "bootstrap-icons/font/bootstrap-icons.css";
import authContext from "@/context/auth/authContext";
import Navbar from "@/components/Navbar";

// React Top Loading Bar.
import LoadingBar from "react-top-loading-bar";

// Alert :- React-Toastify.
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppComponent = (props) => {

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

  // Context
  const context = useContext(authContext);
  const { checktoken, setCheckToken } = context;

  useEffect(() => {
    if(localStorage.getItem("token")) setCheckToken(true);
  }, [])

  return (
    <>
      <LoadingBar
        color="#4154f1"
        ref={topLoaderBar}
        progress={loaderProgress ? 50 : 0}
        waitingTime={10}
        onLoaderFinished={() => setLoaderProgress(false)}
      />
      <Navbar
        showAlert={showAlert}
        setLoaderProgress={setLoaderProgress}
        topLoaderBar={topLoaderBar}
      />
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
      <props.Component
        setLoaderProgress={setLoaderProgress}
        topLoaderBar={topLoaderBar}
        showAlert={showAlert}
        {...props.pageProps}
      />
    </>
  );
};

export default AppComponent;
