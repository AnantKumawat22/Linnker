import React from "react";
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

const contactus = () => {
  return (
    <>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" class={styles.contact}>
        <div class="container" data-aos="fade-up">
          <header class="section-header">
            <p>Contact Us</p>
          </header>

          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="row gy-4">
                <div class="col-md-6">
                  <div class={styles.infoBox}>
                    <FontAwesomeIcon
                      className={styles.contactusicon}
                      icon={faLocationDot}
                    />
                    <h3>Address</h3>
                    <p>
                      A108 Adam Street,
                      <br />
                      New York, NY 535022
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class={styles.infoBox}>
                    <FontAwesomeIcon
                      className={styles.contactusicon}
                      icon={faPhone}
                    />
                    <h3>Call Us</h3>
                    <p>
                      +1 5589 55488 55
                      <br />
                      +1 6678 254445 41
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class={styles.infoBox}>
                    <FontAwesomeIcon
                      className={styles.contactusicon}
                      icon={faEnvelope}
                    />
                    <h3>Email Us</h3>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class={styles.infoBox}>
                    <FontAwesomeIcon
                      className={styles.contactusicon}
                      icon={faClock}
                    />
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                class={styles.EmailForm}
              >
                <div class="row gy-4">
                  <div class="col-md-6">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div class="col-md-6 ">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div class="col-md-12">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div class="col-md-12">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class={styles.loading}>Loading</div>

                    {/* Alert Msg:- Your message has been sent. Thank you! */}

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </>
  );
};

export default contactus;
