import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link className="logo" href="/">
          Linnker
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link href="/" className="link link-theme link-arrow">
              HOME
            </Link>
          </li>
          {/* {localStorage.getItem("token") ? ( */}
            <li>
              <Link href="/dashboard/profile" className="link link-theme link-arrow">
                DashBoard
              </Link>
            </li>
          {/* ) : ( */}
            {/* <></> */}
          {/* )} */}
          <li>
            <Link href="/aboutus" className="link link-theme link-arrow">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/contactus" className="link link-theme link-arrow">
              CONTACT
            </Link>
          </li>

          {/* Show LogIn, Signup, LogOut on the basis of logged-In(having token) or not. */}
          {/* {localStorage.getItem("token") ? (
            <li>
              <Link
                onClick={handleLogOut}
                className="link link-theme link-arrow"
              >
                LogOut
              </Link>
            </li>
          ) : ( */}
            <>
              <li>
                <Link href="/login" className="link link-theme link-arrow">
                  LogIn
                </Link>
              </li>
              <li>
                <Link href="/signup" className="link link-theme link-arrow">
                  Sign Up
                </Link>
              </li>
            </>
          {/* )} */}
        </ul>
      </header>
    </>
  );
};

export default Navbar;
