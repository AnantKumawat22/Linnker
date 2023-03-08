import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from '../styles/aboutus.module.css';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                  Expedita voluptas omnis cupiditate totam eveniet nobis sint
                  iste. Dolores est repellat corrupti reprehenderit.
                </h2>
                <p>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                  et. Inventore et et dolor consequatur itaque ut voluptate sed
                  et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                  corrupti.
                </p>
                <div className="text-center text-lg-start">
                  <a
                    href="#"
                    className={`${styles.btnReadMore} d-inline-flex align-items-center justify-content-center align-self-center`}
                  >
                    <span>Read More</span>
                    <FontAwesomeIcon icon={faArrowRight}/>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                width={800}
                height={600}
                src="/img/about.jpg"
                className="img-fluid"
                alt=""
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
                    src="/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className={styles.social}>
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h4>Anant Kumawat</h4>
                  <span>Student</span>
                  <p>
                    Quo esse repellendus quia id. Est eum et accusantium
                    pariatur fugit nihil minima suscipit corporis. Voluptate sed
                    quas reiciendis animi neque sapiente.
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
                    src="/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className={styles.memberInfo}>
                  <h4>Abhishek Patel</h4>
                  <span>Student</span>
                  <p>
                    Vero omnis enim consequatur. Voluptas consectetur unde qui
                    molestiae deserunt. Voluptates enim aut architecto porro
                    aspernatur molestiae modi.
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
