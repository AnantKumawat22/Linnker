import React, { useState, useContext } from "react";
import Input from "@/components/atoms/input.atom";
import "bootstrap/dist/css/bootstrap.css";
import Button from "@/components/atoms/button.atom";
import Image from "next/image";
import { generalContext } from "@/context/general.context";
import { useRouter } from "next/router";

const forgotpassword = () => {
  // Context.
  const { showAlert, topLoaderBar, setLoaderProgress } =
    useContext(generalContext);

  // Router
  const router = useRouter();

  // Input fields.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ password: "", conpassword: "" });

//   console.log(router);
  const token = router.query;
//   console.log(token);

  const handleSubmitContinue = async (e) => {
    e.preventDefault();

    // Start the loader
    setLoaderProgress(true);
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
    } else {
        showAlert(data.msg, "error");
    }
    // Stop the loader
    setLoaderProgress(false);
    topLoaderBar.current.complete();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

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
        {token.length > 0 ? (
          <></>
        ) : (
          <>
            <Image alt="Forgot Password" src="/img/forgot_password.png" width={300} height={300} />
            <div className="w-100 mt-5 d-flex align-items-center flex-column">
              <h2 className="mb-4 text-center">
                <u> Forgot Password </u>
              </h2>

              <form
                onSubmit={handleSubmitContinue}
                className="d-flex flex-column align-items-center col-md-8 col-sm-11 col-11 col-lg-6"
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
