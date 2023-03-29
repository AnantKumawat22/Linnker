import React, { useState, useContext, useEffect } from "react";
import Input from "@/components/atoms/input.atom";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@/components/atoms/button.atom";
import Image from "next/image";
import { generalContext } from "@/context/general.context";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import fetch from 'node-fetch';

const forgotpassword = () => {
  // Context.
  const { showAlert, topLoaderBar } = useContext(generalContext);

  // Router
  const router = useRouter();

  // Password show state
  const [showpassword, setShowpassword] = useState(false);
  // Confirm Password show state
  const [showconpassword, setShowconpassword] = useState(false);

  // Input fields.
  const [email, setEmail] = useState("");
  // const [token, setToken] = useState(false);
  const [passwordCred, setPasswordCred] = useState({
    password: "",
    conpassword: "",
  });

  const token = router.query.token;
  useEffect(() => {}, [router.query]);

  // Forgot Password - Send mail to Continue.
  const handleSubmitContinue = async (e) => {
    e.preventDefault();

    // Start the loader
    topLoaderBar.current.continuousStart();

    // API CALL
    const response = await fetch("/api/auth/forgotpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();

    // Check if everything is okay or not.
    if (data.success) {
      // Alert
      showAlert(data.msg, "success");
    } else {
      // Alert
      showAlert(data.msg, "error");
    }
    // Stop the loader
    topLoaderBar && topLoaderBar.current.complete();
  };

  // Reset Password - Change Passsword.
  const handleSubmitReset = async (e) => {
    e.preventDefault();

    // Get the password and confirm password
    const { password, conpassword } = passwordCred;

    // Start the loader
    topLoaderBar.current.continuousStart();

    // Check password and confirm password are same or not.
    if (password !== conpassword) {
      showAlert("Password and Confirm Password didn't matched.", "error");

      // Stop the loader
      topLoaderBar && topLoaderBar.current.complete();
      return;
    }

    // API CALL
    const response = await fetch("/api/auth/resetpassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, authtoken: token }),
    });
    const data = await response.json();

    // Check if everything is okay or not.
    if (data.success) {
      // Alert
      showAlert(data.msg, "success");

      // Stop the loader
      topLoaderBar && topLoaderBar.current.complete();

      // Redirect at Login Page
      router.push("/signin");
    } else {
      showAlert(data.msg, "error");
    }
    // Stop the loader
    topLoaderBar && topLoaderBar.current.complete();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordCredChange = (event) => {
    setPasswordCred({
      ...passwordCred,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-center flex-column align-items-center"
        style={{
          paddingBottom: "50px",
          minHeight: "85vh",
          background: "url(/img/hero-bg.svg) top center no-repeat",
        }}
      >
        {token ? (
          <>
            <Image
              alt="Reset Password"
              src="/img/reset_password.gif"
              width={300}
              height={300}
            />
            <div className="w-100 mt-5 d-flex align-items-center flex-column">
              <h2 className="mb-4 text-center">
                <u> Reset Password </u>
              </h2>

              <form
                onSubmit={handleSubmitReset}
                className="d-flex flex-column align-items-center col-md-8 col-sm-11 col-11 col-lg-5"
              >
                <div
                  className="w-100 d-flex flex-row justify-content-center maininp mt-4 pe-2"
                  style={{ border: "1px solid #ced4da" }}
                >
                  <Input
                    type={`${showpassword ? "text" : "password"}`}
                    id="password"
                    value={passwordCred.password}
                    name="password"
                    style={{
                      border: "none",
                      boxShadow: "none",
                      PointerEvent: "none",
                    }}
                    onChange={handlePasswordCredChange}
                    placeholder="Enter New Password"
                  />
                  {showpassword ? (
                    <FontAwesomeIcon
                      role="button"
                      className="mt-3 text-secondary"
                      onClick={() => {
                        setShowpassword(false);
                      }}
                      icon={faEye}
                    />
                  ) : (
                    <FontAwesomeIcon
                      role="button"
                      className="mt-3 text-secondary"
                      onClick={() => {
                        setShowpassword(true);
                      }}
                      icon={faEyeSlash}
                    />
                  )}
                </div>

                {/* Confirm Password input */}
                <div
                  className="w-100 d-flex flex-row justify-content-center maininp mt-4 pe-2"
                  style={{ border: "1px solid #ced4da" }}
                >
                  <Input
                    type={`${showconpassword ? "text" : "password"}`}
                    id="conpassword"
                    value={passwordCred.conpassword}
                    name="conpassword"
                    style={{
                      border: "none",
                      boxShadow: "none",
                      PointerEvent: "none",
                    }}
                    onChange={handlePasswordCredChange}
                    placeholder="Confirm New Password"
                  />
                  {showconpassword ? (
                    <FontAwesomeIcon
                      role="button"
                      className="mt-3 text-secondary"
                      onClick={() => {
                        setShowconpassword(false);
                      }}
                      icon={faEye}
                    />
                  ) : (
                    <FontAwesomeIcon
                      role="button"
                      className="mt-3 text-secondary"
                      onClick={() => {
                        setShowconpassword(true);
                      }}
                      icon={faEyeSlash}
                    />
                  )}
                </div>

                <div className="text-center text-lg-start mt-2 pt-1">
                  <Button
                    type="submit"
                    value="Reset password"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  ></Button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <Image
              alt="Forgot Password"
              src="/img/forgot_password.png"
              width={250}
              height={250}
            />
            <div className="w-100 mt-5 d-flex align-items-center flex-column">
              <h2 className="mb-4 text-center">
                <u> Forgot Password </u>
              </h2>

              <form
                onSubmit={handleSubmitContinue}
                className="d-flex flex-column align-items-center col-md-8 col-sm-11 col-11 col-lg-5"
              >
                <Input
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={handleEmailChange}
                  placeholder="Enter your Email"
                />

                <div className="text-center text-lg-start mt-2 pt-1">
                  <Button
                    type="submit"
                    value="Continue"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  ></Button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default forgotpassword;
