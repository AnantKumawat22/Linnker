import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { createContext, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import LoadingBar from "react-top-loading-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const generalContext = createContext();

const GeneralContextProvider = ({ children, router }) => {
  // Loading bar ref.
  const topLoaderBar = useRef(null);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      //   // Stop the loader
      topLoaderBar && topLoaderBar.current.complete();
    });
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    toast.dismiss();
  };

  // Alert
  const showAlert = (msg, type) => {
    if (type == "error") {
      toast.error(`${msg}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeButton: (
          <FontAwesomeIcon
            style={{ margin: "auto" }}
            icon={faXmark}
            onClick={handleClose}
          >
            Close
          </FontAwesomeIcon>
        ),
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
        closeButton: (
          <FontAwesomeIcon
            style={{ margin: "auto" }}
            icon={faXmark}
            onClick={handleClose}
          >
            Close
          </FontAwesomeIcon>
        ),
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <generalContext.Provider value={{ topLoaderBar, showAlert }}>
      <LoadingBar color="#4154f1" waitingTime={10} ref={topLoaderBar} />
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
      {children}
    </generalContext.Provider>
  );
};

export default GeneralContextProvider;
