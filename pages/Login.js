import React, { useState, useEffect, useContext, useLayoutEffect } from "react";
import authContext from "@/context/auth/authContext";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@/components/atoms/button.atom";
import Input from "@/components/atoms/input.atom";
import { useRouter } from "next/router";

const Login = (props) => {
  // Context
  const context = useContext(authContext);
  const { checktoken, setCheckToken } = context;

  // Router
  const router = useRouter();

  // Handle State of input fields.
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });

  useLayoutEffect(() => {
    if (localStorage.getItem("token")) router.push("/");
  }, []);

  // On From Submit
  const handleSubmit = async (e) => {
    const { email, password } = cred;

    e.preventDefault();

    // Start the loader
    props.setLoaderProgress(true);
    props.topLoaderBar.current.continuousStart();

    // API CALL
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    // Check if Everthing is okay or not.
    if (data.success) {
      // Store Token in LocalStorage.
      localStorage.setItem("token", data.authtoken);
      setCheckToken(true);

      // Alert
      props.showAlert(data.msg, "success");

      // Stop the loader
      props.setLoaderProgress(false);
      props.topLoaderBar.current.complete();

      setTimeout(() => {
        // Redirect at Home Page
        router.push("/");
      }, 100);
    } else {
      // Stop the loader
      props.setLoaderProgress(false);
      props.topLoaderBar.current.complete();

      // Alert
      props.showAlert(data.msg, "error");
    }
  };

  // On change in input field.
  const inpChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section style={{ paddingTop: "30px" }}>
        <div className="container-fluid pb-5" style={{ minHeight: "75vh" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 mt-5 col-xl-4 offset-xl-1">
              <h2 className="mb-4 text-center">
                <u> Login </u>
              </h2>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Phone Number input */}

                <Input
                  type="email"
                  id="email"
                  value={cred.email}
                  name="email"
                  onChange={inpChange}
                  placeholder="Enter your Email"
                />

                {/* Password input */}
                <Input
                  type="password"
                  id="password"
                  value={cred.password}
                  name="password"
                  onChange={inpChange}
                  placeholder="Enter password"
                />

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
                  <Button
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  ></Button>
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
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-center py-4 px-4 px-xl-5 bg-primary">
          {/* Copyright */}
          <div className="text-white mb-3 mb-md-0 text-center">
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
      </section>
    </>
  );
};

export default Login;
