import { createContext, useEffect, useRef, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar';

export const generalContext = createContext();

const GeneralContextProvider = ({ children, router }) => {
  // Loading bar State and ref.
  const topLoaderBar = useRef(null);
  const [loaderProgress, setLoaderProgress] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      // Stop the loader
      setLoaderProgress(false);
      topLoaderBar.current.complete();
    });
  }, []);

  const showAlert = (msg, type) => {
    if (type == 'error') {
      toast.error(`${msg}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.success(`${msg}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  return (
    <generalContext.Provider value={{ topLoaderBar, setLoaderProgress, showAlert }}>
      <LoadingBar
        color='#4154f1'
        ref={topLoaderBar}
        progress={loaderProgress ? 50 : 0}
        waitingTime={10}
        onLoaderFinished={() => setLoaderProgress(false)}
      />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
      {children}
    </generalContext.Provider>
  );
};

export default GeneralContextProvider;
