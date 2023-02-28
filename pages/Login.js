import React, {useState} from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "@/components/Navbar";

const Login = () => {

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
        <Navbar/>
          <section className="vh-100">
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    className="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  {/* Form */}
                  <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        autoComplete="off"
                        value={cred.email}
                        name="email"
                        onChange={inpChange}
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
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
                      <Link href="#!" className="text-body">
                        Forgot password?
                      </Link>
                    </div>
    
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                      >
                        Login
                      </button>
                      <p className="small mt-2 pt-1 mb-0">
                        Don't have an account?{" "}
                        <Link href="/signup" className="link-danger">
                          SignUp
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
                Copyright © 2020. All rights reserved.
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

export default Login;
