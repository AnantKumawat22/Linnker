import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@/components/atoms/button.atom";

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;

  // Redirect to login page if user is not authenticated
  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  }
}

const Signup = (props) => {
  // Router
  const router = useRouter();

  // Handle State of input fields.
  const [cred, setCred] = useState({
    name: "",
    email: "",
    password: "",
    conpassword: "",
  });

  // On From Submit - SignUp
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Start the loader
    props.setLoaderProgress(true);
    props.topLoaderBar.current.continuousStart();

    const { name, email, password, conpassword } = cred;

    // Check password and confirm password are same or not.
    if (password !== conpassword) {
      props.showAlert(
        "Password and Confirm Password didn't matched.",
        "error"
      );
      return;
    }

    // API CALL
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    console.log(data);
    
    // Check if everything Okay.
    if (data.success) {
      // Alert
      props.showAlert(data.msg, "success");

      // Stop the loader
      props.setLoaderProgress(false);
      props.topLoaderBar.current.complete();

      // Redirect at Login Page
      router.push("/login");
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
        <div className="container-fluid h-custom pb-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 pt-5">
              <h2 className="mb-4 text-center">
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
                    type="email"
                    id="email"
                    autoComplete="off"
                    value={cred.email}
                    name="email"
                    onChange={inpChange}
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
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
      </section>
    </>
  );
};

export default Signup;
