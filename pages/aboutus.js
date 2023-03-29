import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from "../styles/aboutus.module.css";
import Link from "next/link";

const aboutus = () => {
  return (
    <>
      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className={styles.about}>
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.content}>
                <h3>Who We Are</h3>
                <h2>
                  We are problem solvers. Who Loves to create something unique
                  from our ideas.
                </h2>
                <p>
                  Anant Kumawat and Abhishek Patel. We are from Computer
                  Science, who believe and love to create problem solving ideas.
                  Linnker is also a creative idea from our mind. We like to help
                  people by our skills and knowledge :-)
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                width={820}
                height={540}
                priority
                src="/img/Logo/logo.png"
                className="img-fluid"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Team Section ======= --> */}
      <section id="team" className={styles.team}>
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Team</h2>
            <p>Our hard working team</p>
          </header>

          <div className="row gy-4 d-flex justify-content-center">
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className={styles.member}>
                <div className={styles.memberImg}>
                  <Image
                    width={200}
                    height={200}
                    style={{ width: "auto", height: "auto" }}
                    src="/img/team/team-1.jpg"
                    className="img-fluid"
                    alt="Anant Kumawat"
                  />
                  <div className={styles.social}>
                    <Link
                      href="https://twitter.com/AnantKumawat02"
                      target="_blank"
                    >
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href="https://www.instagram.com/anantkumawat22/" target="_blank">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/anant-kumawat/" target="_blank">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h4>Anant Kumawat</h4>
                  <span>Computer Science</span>
                  <p>
                    Full Stack Web Developer | AWS | MERN Stack | Problem Solving | DSA.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className={styles.member}>
                <div className={styles.memberImg}>
                  <Image
                    width={200}
                    height={200}
                    style={{ width: "auto", height: "auto" }}
                    src="/img/team/team-2.jpg"
                    className="img-fluid"
                    alt="Abhishek Patel"
                  />
                  <div className={styles.social}>
                    <Link href="https://twitter.com/ABHISHE65635171" target="_blank">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link href="https://www.instagram.com/abhishekpatel7339/" target="_blank">
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/in/abhishekpatel87/" target="_blank">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h4>Abhishek Patel</h4>
                  <span>Computer Science</span>
                  <p>
                    MERN Stack developer | JAMstack | Full Stack Developer | App
                    Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Team Section --> */}
    </>
  );
};

export default aboutus;
