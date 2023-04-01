import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <>
      <div className="d-flex flex-column flex-md-row justify-content-center py-4 px-4 px-xl-5 bg-light">
        {/* Copyright */}
        <div className="text-dark mb-md-0 text-center">
          Copyright © 2023 by Linnker. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
