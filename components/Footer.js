import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-center py-4 px-4 px-xl-5 bg-primary">
        {/* Copyright */}
        <div className="text-white mb-md-0 text-center">
          Copyright © 2023 by Linnker. All rights reserved.
        </div>

        {/* Right */}
        {/* <div>
            <Link href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </Link>
            <Link href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div> */}
      </div>
    </>
  );
};

export default Footer;
