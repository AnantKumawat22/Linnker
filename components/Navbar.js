import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.css';
import { destroyCookie } from 'nookies';
import { parseCookies } from 'nookies';
import { generalContext } from '@/context/general.context';

const Navbar = (props) => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [token, setToken] = useState(null);
  const { asPath } = useRouter();
  const { showAlert } = useContext(generalContext);
  // const cookies = parseCookies();
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies.token;
    setToken(token);
  }, [parseCookies().token]);

  // Handling LogOut
  const handleLogout = () => {
    // Remove token from localstorage - Nookies.
    destroyCookie(null, 'token');
    setToken(null);

    // Alert
    showAlert('Log Out Successfully.', 'success');

    setTimeout(() => {
      // Redirect at Home Page
      router.push('/');
    }, 1000);
  };

  const handleMenu = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header
        onResize={(e) => {}}
        style={
          scrolled
            ? { backgroundColor: 'white', boxShadow: '0 0 2px 0px lightgray' }
            : {}
        }
        id='header'
        className={`${styles.header}`}
      >
        <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <Link href='/' className={`${styles.logo} d-flex align-items-center`}>
            <img src='assets/img/logo.png' alt='' />
            <span>Linnker</span>
          </Link>

          <nav id='navbar' className={`${styles['navbar']}`}>
            <ul style={drawerOpen ? {} : { transform: 'translateX(-120%)' }}>
              <li>
                <Link
                  className={`nav-link scrollto ${
                    asPath === '/' ? 'active' : ''
                  }`}
                  href='/'
                >
                  Home
                </Link>
              </li>

              {token ? (
                <>
                  <li>
                    <Link
                      href='/dashboard/profile'
                      className={`nav-link scrollto ${
                        asPath === '/dashboard/profile' ? 'active' : ''
                      }`}
                    >
                      Dashboard
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}

              <li>
                <Link
                  href='/aboutus'
                  className={`nav-link scrollto ${
                    asPath === '/aboutus' ? 'active' : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link scrollto ${
                    asPath === '/contactus' ? 'active' : ''
                  }`}
                  href='/contactus'
                >
                  Contact
                </Link>
              </li>

              {!token ? (
                <>
                  <li>
                    <Link
                      className={`nav-link scrollto ${
                        asPath === '/login' ? 'active' : ''
                      }`}
                      href='/login'
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`nav-link scrollto ${
                        asPath === '/signup' ? 'active' : ''
                      }`}
                      href='/signup'
                    >
                      Signup
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      className={`nav-link scrollto}`}
                      href='#'
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link className={`nav-link`} href='/groups'>
                  <div className='btn-get-started nav-link scroll-to m-0'>
                    <span>Join Groups</span>
                    <i className='bi bi-arrow-right'></i>
                  </div>
                </Link>
              </li>
            </ul>
            <i
              className={`bi bi-list ${styles['mobile-nav-toggle']}`}
              onClick={handleMenu}
            ></i>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};

export default Navbar;

// <header className='header shadow-sm mb-3 bg-white rounded fixed-top'>
//   <Link className='logo' href='/'>
//     Linnker
//   </Link>
//   <input className='menu-btn' type='checkbox' id='menu-btn' />
//   <label className='menu-icon' htmlFor='menu-btn'>
//     <span className='navicon'></span>
//   </label>
//   <ul className='menu'>
//     <li>
//       <Link href='/' className='link link-theme link-arrow'>
//         HOME
//       </Link>
//     </li>
//     {/* {localStorage.getItem("token") ? ( */}
//     <li>
// <Link href='/dashboard/profile' className='link link-theme link-arrow'>
//   DashBoard
// </Link>
//     </li>
//     {/* ) : ( */}
//     {/* <></> */}
//     {/* )} */}
//     <li>
//       <Link href='/aboutus' className='link link-theme link-arrow'>
//         ABOUT US
//       </Link>
//     </li>
//     <li>
//       <Link href='/contactus' className='link link-theme link-arrow'>
//         CONTACT
//       </Link>
//     </li>

//     {/* Show LogIn, Signup, LogOut on the basis of logged-In(having token) or not. */}
//     {/* {localStorage.getItem("token") ? (
//           <li>
//             <Link
//               onClick={handleLogOut}
//               className="link link-theme link-arrow"
//             >
//               LogOut
//             </Link>
//           </li>
//         ) : ( */}
//     <>
//       <li>
//         <Link href='/login' className='link link-theme link-arrow'>
//           LogIn
//         </Link>
//       </li>
//       <li>
//         <Link href='/signup' className='link link-theme link-arrow'>
//           Sign Up
//         </Link>
//       </li>
//     </>
//     {/* )} */}
//   </ul>
// </header>;
