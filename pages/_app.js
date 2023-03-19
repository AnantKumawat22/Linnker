import Navbar from '@/components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

// import Font Awesome CSS
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import GeneralContextProvider from '@/context/general.context';
import '@/scss/custom.scss';
import '@/styles/globals.css';
import AuthContextProvider from '@/context/auth.context';
import GroupContextProvider from '@/context/group.context';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  // Router
  const router = useRouter();

  return (
    <GeneralContextProvider router={router}>
      <AuthContextProvider>
        <GroupContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </GroupContextProvider>
      </AuthContextProvider>
    </GeneralContextProvider>
  );
}
