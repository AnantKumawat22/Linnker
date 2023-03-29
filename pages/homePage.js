import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Link from "next/link";

const homePage = () => {
  return (
    <div className="home-page-root">
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" className="text-lg-start text-center">
                WhatsApp Groups link to join
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-delay="400"
                className="text-lg-start text-center"
              >
                We make it easy to find best groups for you to join.
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <Link
                  href="/groups"
                  className="m-lg-0 d-flex m-auto mt-lg-5 mt-5"
                  style={{ width: "max-content" }}
                >
                  <div className="btn-get-started scroll-to m-0">
                    <span>Join Groups</span>
                    <i className="bi bi-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                src="/img/homepage/hero-img.png"
                className="img-fluid"
                alt="Homepage"
                width={540}
                height={440}
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= Values Section ======= --> */}
        <section id="values" className="values">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Working</h2>
              <p>How Linnker Works ?</p>
            </header>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                <div className="box">
                  <Image
                    src="/img/homepage/values-1.png"
                    className="img-fluid"
                    alt="values-1"
                    width={440}
                    height={360}
                  />
                  <h3>Create Your Account</h3>
                  <p>
                    Create your account on Linnker and add your WhatsApp groups.
                    So that people can join your groups.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="box">
                  <Image
                    src="/img/homepage/values-2.png"
                    width={440}
                    height={360}
                    className="img-fluid"
                    alt="values-2"
                  />
                  <h3>Find A WhatsApp Group</h3>
                  <p>
                    Click on "Join Groups". Search and find your best-suited
                    groups to join.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 mt-4 mt-lg-0"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="box">
                  <Image
                    src="/img/homepage/values-3.png"
                    width={440}
                    height={360}
                    className="img-fluid"
                    alt="values-3"
                  />
                  <h3>Valid WhatApp Groups</h3>
                  <p>
                    All groups are valid WhatsApp groups and have been verified
                    by our team. If you find any spam groups, you can contact us and report them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Values Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        {/* <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="232"
                      data-purecounter-duration="1"
                      className="purecounter"
                    >
                      200
                    </span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i
                    className="bi bi-journal-richtext"
                    style={{ color: "#ee6c20" }}
                  ></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="521"
                      data-purecounter-duration="1"
                      className="purecounter"
                    >
                      200
                    </span>
                    <p>Projects</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-headset" style={{ color: "#15be56" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1463"
                      data-purecounter-duration="1"
                      className="purecounter"
                    >
                      200
                    </span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-people" style={{ color: "#bb0852" }}></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="15"
                      data-purecounter-duration="1"
                      className="purecounter"
                    >
                      2
                    </span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- End Counts Section --> */}

        {/* <!-- ======= Features Section ======= --> */}
        <section id="features" className="features mb-5">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Features</h2>
              <p>How To Find Best WhatsApp Groups For You ?</p>
            </header>

            <div className="row">
              <div className="col-lg-6">
                <Image
                  src="/img/homepage/features.png"
                  width={1040}
                  height={660}
                  className="img-fluid"
                  alt="features"
                />
              </div>

              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="200"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Click on "Join Groups"</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Search by Group Name</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="400"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Search by Tags</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="500"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Click on group for details</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="600"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Find your Best Group</h3>
                    </div>
                  </div>

                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay="700"
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check"></i>
                      <h3>Hurray! join the group</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- / row --> */}

            {/* <!-- Feature Icons --> */}
            <div className="row feature-icons" data-aos="fade-up">
              <h3>How To Create Your WhatsApp Groups ?</h3>

              <div className="row">
                <div
                  className="col-xl-3 text-center"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <Image
                    width={725}
                    height={790}
                    src="/img/homepage/features-3.png"
                    className="img-fluid p-4"
                    priority
                    alt="features-3"
                  />
                </div>

                <div className="col-xl-8 offset-xl-1  d-flex content">
                  <div className="row align-self-center mt-3 gy-4">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="ri-line-chart-line"></i>
                      <div>
                        <h4>Create Your Account</h4>
                        <p>
                          Create your account on Linnker by signup and verify your email. 
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="ri-stack-line"></i>
                      <div>
                        <h4>Create WhatsApp Groups</h4>
                        <p>
                          You can create and Delete your WhatsApp groups. Your group will be visible to everyone after getting approved by our team.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="ri-brush-4-line"></i>
                      <div>
                        <h4>Group Description</h4>
                        <p>
                          Give a better group description to increase the chances of joining groups by users.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="ri-magic-line"></i>
                      <div>
                        <h4>Group Name And Tags</h4>
                        <p>
                          Give the best and related group name and tags. So that users can find your groups by searching.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="ri-command-line"></i>
                      <div>
                        <h4>Valid WhatsApp Group Link</h4>
                        <p>
                          We will approve only those groups which is valid WhatsApp group. So give a valid group link.
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <i className="ri-radar-line"></i>
                      <div>
                        <h4>Report Us</h4>
                        <p>
                          If you find anything wrong with your group done by others, you can contact us by mail.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Feature Icons --> */}
          </div>
        </section>
        {/* <!-- End Features Section --> */}

        {/* <!-- ======= Services Section ======= --> */}
        {/* <section id="services" className="services my-5 py-5">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Services</h2>
              <p>Veritatis et dolores facere numquam et praesentium</p>
            </header>

            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-box blue">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <Link href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-box orange">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <Link href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-box green">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <Link href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-box red">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Asperiores Commodi</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <Link href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="service-box purple">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Velit Doloremque.</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <Link href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="service-box pink">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <Link href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <!-- End Services Section --> */}
      </main>
      {/* <!-- End #main --> */}
    </div>
  );
};

export default homePage;
