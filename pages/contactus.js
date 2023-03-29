import React, { useContext, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/contactus.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { Formik } from "formik";
import { generalContext } from "@/context/general.context";
import fetch from 'node-fetch';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  subject: Yup.string().min(5, "Too Short!").required("Required"),
  message: Yup.string().min(15, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const contactus = () => {
  const { showAlert } = useContext(generalContext);
  return (
    <>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className={styles.contact}>
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <p>Contact Us</p>
          </header>

          <div className={`row gy-4 ${styles.contactusdiv}`}>
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className={styles.infoBox}>
                    <FontAwesomeIcon
                      className={styles.contactusicon}
                      icon={faLocationDot}
                    />
                    <h3>Address</h3>
                    <p>Linnker, India</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.infoBox}>
                    <FontAwesomeIcon
                      className={styles.contactusicon}
                      icon={faPhone}
                    />
                    <h3>Call Us</h3>
                    <p>It will Update soon.</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.infoBox}>
                    <FontAwesomeIcon
                      className={styles.contactusicon}
                      icon={faEnvelope}
                    />
                    <h3>Email Us</h3>
                    <p>linnker23@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.infoBox}>
                    <FontAwesomeIcon
                      className={styles.contactusicon}
                      icon={faClock}
                    />
                    <h3>Open Hours</h3>
                    <p>It will Update soon.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className={styles.EmailForm}>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={async (values, actions) => {
                    const { setSubmitting, resetForm } = actions;
                    setSubmitting(true);
                    try {
                      const response = await fetch("/api/query", {
                        method: "post",
                        body: JSON.stringify(values),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }).then(async (response) => await response.json());
                      setSubmitting(false);

                      if (response.success) {
                        showAlert(response?.msg, "success");
                      } else {
                        showAlert(response?.msg, "error");
                      }
                      resetForm();
                    } catch (error) {
                      setSubmitting(false);
                      showAlert(
                        error?.response?.data?.message || "Server Error",
                        "error"
                      );
                    }
                  }}
                >
                  {({
                    errors,
                    values,
                    touched,
                    handleSubmit,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                  }) => (
                    <div className="row gy-4">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          required
                          style={
                            errors.name &&
                            touched.name && {
                              borderColor: "red",
                            }
                          }
                          value={values.name}
                          onChange={handleChange("name")}
                          onBlur={handleBlur("name")}
                        />
                        {errors.name && touched.name && (
                          <p className="text-danger mb-0 fs-6">{errors.name}</p>
                        )}
                      </div>

                      <div className="col-md-6 ">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          required
                          style={
                            errors.email &&
                            touched.email && {
                              borderColor: "red",
                            }
                          }
                          value={values.email}
                          onChange={handleChange("email")}
                          onBlur={handleBlur("email")}
                        />
                        {errors.email && touched.email && (
                          <p className="text-danger mb-0 fs-6">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required
                          style={
                            errors.subject &&
                            touched.subject && {
                              borderColor: "red",
                            }
                          }
                          value={values.subject}
                          onChange={handleChange("subject")}
                          onBlur={handleBlur("subject")}
                        />
                        {errors.subject && touched.subject && (
                          <p className="text-danger mb-0 fs-6">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="6"
                          placeholder="Message"
                          required
                          style={
                            errors.message &&
                            touched.message && {
                              borderColor: "red",
                            }
                          }
                          value={values.message}
                          onChange={handleChange("message")}
                          onBlur={handleBlur("message")}
                        ></textarea>
                        {errors.message && touched.message && (
                          <p className="text-danger mb-0 fs-6">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="col-md-12 text-center">
                        <div className={styles.loading}>Loading</div>
                        {/* Alert Msg:- Your message has been sent. Thank you! */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </>
  );
};

export default contactus;
