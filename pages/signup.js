import React, { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@/components/atoms/button.atom";

const Signup = () => {
  // Handle State of input fields.
  const [cred, setCred] = useState({
    phnumber: "",
    password: "",
  });

  // On From Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // On change in input field.
  const inpChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

              <h2 className="mb-4">
                <u> SignUp </u>
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit}>

                {/* Full Name input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={cred.name}
                    name="name"
                    onChange={inpChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Phone Number input */}
                <div className="form-outline mb-4">
                  <input
                    type="tel"
                    id="phnumber"
                    autoComplete="off"
                    value={cred.phnumber}
                    name="phnumber"
                    onChange={inpChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your whatsapp number"
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    value={cred.password}
                    name="password"
                    onChange={inpChange}
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                {/* Confirm Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="conpassword"
                    value={cred.conpassword}
                    name="conpassword"
                    onChange={inpChange}
                    className="form-control form-control-lg"
                    placeholder="Confrim password"
                  />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Button
                    type="submit"
                    value="Signup"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  ></Button>
                  <p className="small mt-2 pt-1 mb-0">
                    Already have an account?{" "}
                    <Link href="/login" className="link-danger">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          {/* Copyright */}
          <div className="text-white mb-3 mb-md-0">
            Copyright ?? 2023 by Linnker. All rights reserved.
          </div>

          {/* Right */}
          <div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
