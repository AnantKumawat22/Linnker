import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import Link from 'next/link';

const homePage = () => {
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id='hero' className='hero d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 d-flex flex-column justify-content-center'>
              <h1 data-aos='fade-up'>WhatsApp Group link to join</h1>
              <h2 data-aos='fade-up' data-aos-delay='400'>
                We make easy to find best group to join
              </h2>
              <div data-aos='fade-up' data-aos-delay='600'>
                <div className='text-center text-lg-start'>
                  <Link
                    href="/groups"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Join Groups</span>
                    <i className='bi bi-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className='col-lg-6 hero-img'
              data-aos='zoom-out'
              data-aos-delay='200'
            >
              <img src='/img/hero-img.png' className='img-fluid' alt='' priority />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id='main'>
        {/* <!-- ======= Values Section ======= --> */}
        <section id='values' className='values'>
          <div className='container' data-aos='fade-up'>
            <header className='section-header'>
              <h2>Our Values</h2>
              <p>Odit est perspiciatis laborum et dicta</p>
            </header>

            <div className='row'>
              <div className='col-lg-4' data-aos='fade-up' data-aos-delay='200'>
                <div className='box'>
                  <img src='/img/values-1.png' className='img-fluid' alt='' />
                  <h3>Ad cupiditate sed est odio</h3>
                  <p>
                    Eum ad dolor et. Autem aut fugiat debitis voluptatem
                    consequuntur sit. Et veritatis id.
                  </p>
                </div>
              </div>

              <div
                className='col-lg-4 mt-4 mt-lg-0'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                <div className='box'>
                  <img src='/img/values-2.png' className='img-fluid' alt='' />
                  <h3>Voluptatem voluptatum alias</h3>
                  <p>
                    Repudiandae amet nihil natus in distinctio suscipit id.
                    Doloremque ducimus ea sit non.
                  </p>
                </div>
              </div>

              <div
                className='col-lg-4 mt-4 mt-lg-0'
                data-aos='fade-up'
                data-aos-delay='600'
              >
                <div className='box'>
                  <img src='/img/values-3.png' className='img-fluid' alt='' />
                  <h3>Fugit cupiditate alias nobis.</h3>
                  <p>
                    Quam rem vitae est autem molestias explicabo debitis sint.
                    Vero aliquid quidem commodi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Values Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        <section id='counts' className='counts'>
          <div className='container' data-aos='fade-up'>
            <div className='row gy-4'>
              <div className='col-lg-3 col-md-6'>
                <div className='count-box'>
                  <i className='bi bi-emoji-smile'></i>
                  <div>
                    <span
                      data-purecounter-start='0'
                      data-purecounter-end='232'
                      data-purecounter-duration='1'
                      className='purecounter'
                    ></span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='count-box'>
                  <i
                    className='bi bi-journal-richtext'
                    style={{ color: '#ee6c20' }}
                  ></i>
                  <div>
                    <span
                      data-purecounter-start='0'
                      data-purecounter-end='521'
                      data-purecounter-duration='1'
                      className='purecounter'
                    ></span>
                    <p>Projects</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='count-box'>
                  <i className='bi bi-headset' style={{ color: '#15be56' }}></i>
                  <div>
                    <span
                      data-purecounter-start='0'
                      data-purecounter-end='1463'
                      data-purecounter-duration='1'
                      className='purecounter'
                    ></span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>

              <div className='col-lg-3 col-md-6'>
                <div className='count-box'>
                  <i className='bi bi-people' style={{ color: '#bb0852' }}></i>
                  <div>
                    <span
                      data-purecounter-start='0'
                      data-purecounter-end='15'
                      data-purecounter-duration='1'
                      className='purecounter'
                    ></span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section --> */}

        {/* <!-- ======= Features Section ======= --> */}
        <section id='features' className='features'>
          <div className='container' data-aos='fade-up'>
            <header className='section-header'>
              <h2>Features</h2>
              <p>Laboriosam et omnis fuga quis dolor direda fara</p>
            </header>

            <div className='row'>
              <div className='col-lg-6'>
                <img src='/img/features.png' className='img-fluid' alt='' />
              </div>

              <div className='col-lg-6 mt-5 mt-lg-0 d-flex'>
                <div className='row align-self-center gy-4'>
                  <div
                    className='col-md-6'
                    data-aos='zoom-out'
                    data-aos-delay='200'
                  >
                    <div className='feature-box d-flex align-items-center'>
                      <i className='bi bi-check'></i>
                      <h3>Eos aspernatur rem</h3>
                    </div>
                  </div>

                  <div
                    className='col-md-6'
                    data-aos='zoom-out'
                    data-aos-delay='300'
                  >
                    <div className='feature-box d-flex align-items-center'>
                      <i className='bi bi-check'></i>
                      <h3>Facilis neque ipsa</h3>
                    </div>
                  </div>

                  <div
                    className='col-md-6'
                    data-aos='zoom-out'
                    data-aos-delay='400'
                  >
                    <div className='feature-box d-flex align-items-center'>
                      <i className='bi bi-check'></i>
                      <h3>Volup amet voluptas</h3>
                    </div>
                  </div>

                  <div
                    className='col-md-6'
                    data-aos='zoom-out'
                    data-aos-delay='500'
                  >
                    <div className='feature-box d-flex align-items-center'>
                      <i className='bi bi-check'></i>
                      <h3>Rerum omnis sint</h3>
                    </div>
                  </div>

                  <div
                    className='col-md-6'
                    data-aos='zoom-out'
                    data-aos-delay='600'
                  >
                    <div className='feature-box d-flex align-items-center'>
                      <i className='bi bi-check'></i>
                      <h3>Alias possimus</h3>
                    </div>
                  </div>

                  <div
                    className='col-md-6'
                    data-aos='zoom-out'
                    data-aos-delay='700'
                  >
                    <div className='feature-box d-flex align-items-center'>
                      <i className='bi bi-check'></i>
                      <h3>Repellendus mollitia</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- / row --> */}

            {/* <!-- Feature Tabs --> */}
            <div className='row feture-tabs' data-aos='fade-up'>
              <div className='col-lg-6'>
                <h3>
                  Neque officiis dolore maiores et exercitationem quae est seda
                  lidera pat claero
                </h3>

                {/* <!-- Tabs --> */}
                <ul className='nav nav-pills mb-3'>
                  <li>
                    <a
                      className='nav-link active'
                      data-bs-toggle='pill'
                      href='#tab1'
                    >
                      Saepe fuga
                    </a>
                  </li>
                  <li>
                    <a className='nav-link' data-bs-toggle='pill' href='#tab2'>
                      Voluptates
                    </a>
                  </li>
                  <li>
                    <a className='nav-link' data-bs-toggle='pill' href='#tab3'>
                      Corrupti
                    </a>
                  </li>
                </ul>
                {/* <!-- End Tabs --> */}

                {/* <!-- Tab Content --> */}
                <div className='tab-content'>
                  <div className='tab-pane fade show active' id='tab1'>
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-check2'></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-check2'></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                  {/* <!-- End Tab 1 Content --> */}

                  <div className='tab-pane fade show' id='tab2'>
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-check2'></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-check2'></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                  {/* <!-- End Tab 2 Content --> */}

                  <div className='tab-pane fade show' id='tab3'>
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-check2'></i>
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className='d-flex align-items-center mb-2'>
                      <i className='bi bi-check2'></i>
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                  {/* <!-- End Tab 3 Content --> */}
                </div>
              </div>

              <div className='col-lg-6'>
                <img src='/img/features-2.png' className='img-fluid' alt='' />
              </div>
            </div>
            {/* <!-- End Feature Tabs --> */}

            {/* <!-- Feature Icons --> */}
            <div className='row feature-icons' data-aos='fade-up'>
              <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

              <div className='row'>
                <div
                  className='col-xl-4 text-center'
                  data-aos='fade-right'
                  data-aos-delay='100'
                >
                  <Image
                    width={200}
                    height={200}
                    src='/img/features-3.png'
                    className='img-fluid p-4'
                    alt=''
                  />
                </div>

                <div className='col-xl-8 d-flex content'>
                  <div className='row align-self-center gy-4'>
                    <div className='col-md-6 icon-box' data-aos='fade-up'>
                      <i className='ri-line-chart-line'></i>
                      <div>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>

                    <div
                      className='col-md-6 icon-box'
                      data-aos='fade-up'
                      data-aos-delay='100'
                    >
                      <i className='ri-stack-line'></i>
                      <div>
                        <h4>Ullamco laboris nisi</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>

                    <div
                      className='col-md-6 icon-box'
                      data-aos='fade-up'
                      data-aos-delay='200'
                    >
                      <i className='ri-brush-4-line'></i>
                      <div>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>

                    <div
                      className='col-md-6 icon-box'
                      data-aos='fade-up'
                      data-aos-delay='300'
                    >
                      <i className='ri-magic-line'></i>
                      <div>
                        <h4>Beatae veritatis</h4>
                        <p>
                          Expedita veritatis consequuntur nihil tempore
                          laudantium vitae denat pacta
                        </p>
                      </div>
                    </div>

                    <div
                      className='col-md-6 icon-box'
                      data-aos='fade-up'
                      data-aos-delay='400'
                    >
                      <i className='ri-command-line'></i>
                      <div>
                        <h4>Molestiae dolor</h4>
                        <p>
                          Et fuga et deserunt et enim. Dolorem architecto
                          ratione tensa raptor marte
                        </p>
                      </div>
                    </div>

                    <div
                      className='col-md-6 icon-box'
                      data-aos='fade-up'
                      data-aos-delay='500'
                    >
                      <i className='ri-radar-line'></i>
                      <div>
                        <h4>Explicabo consectetur</h4>
                        <p>
                          Est autem dicta beatae suscipit. Sint veritatis et sit
                          quasi ab aut inventore
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
        <section id='services' className='services'>
          <div className='container' data-aos='fade-up'>
            <header className='section-header'>
              <h2>Services</h2>
              <p>Veritatis et dolores facere numquam et praesentium</p>
            </header>

            <div className='row gy-4'>
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='service-box blue'>
                  <i className='ri-discuss-line icon'></i>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a href='#' className='read-more'>
                    <span>Read More</span> <i className='bi bi-arrow-right'></i>
                  </a>
                </div>
              </div>

              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <div className='service-box orange'>
                  <i className='ri-discuss-line icon'></i>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a href='#' className='read-more'>
                    <span>Read More</span> <i className='bi bi-arrow-right'></i>
                  </a>
                </div>
              </div>

              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                <div className='service-box green'>
                  <i className='ri-discuss-line icon'></i>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a href='#' className='read-more'>
                    <span>Read More</span> <i className='bi bi-arrow-right'></i>
                  </a>
                </div>
              </div>

              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay='500'
              >
                <div className='service-box red'>
                  <i className='ri-discuss-line icon'></i>
                  <h3>Asperiores Commodi</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href='#' className='read-more'>
                    <span>Read More</span> <i className='bi bi-arrow-right'></i>
                  </a>
                </div>
              </div>

              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay='600'
              >
                <div className='service-box purple'>
                  <i className='ri-discuss-line icon'></i>
                  <h3>Velit Doloremque.</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a href='#' className='read-more'>
                    <span>Read More</span> <i className='bi bi-arrow-right'></i>
                  </a>
                </div>
              </div>

              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay='700'
              >
                <div className='service-box pink'>
                  <i className='ri-discuss-line icon'></i>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href='#' className='read-more'>
                    <span>Read More</span> <i className='bi bi-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= F.A.Q Section ======= --> */}
        <section id='faq' className='faq'>
          <div className='container' data-aos='fade-up'>
            <header className='section-header'>
              <h2>F.A.Q</h2>
              <p>Frequently Asked Questions</p>
            </header>

            <div className='row'>
              <div className='col-lg-6'>
                {/* <!-- F.A.Q List 1--> */}
                <div className='accordion accordion-flush' id='faqlist1'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-1'
                      >
                        Non consectetur a erat nam at lectus urna duis?
                      </button>
                    </h2>
                    <div
                      id='faq-content-1'
                      className='accordion-collapse collapse'
                      data-bs-parent='#faqlist1'
                    >
                      <div className='accordion-body'>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </div>
                    </div>
                  </div>

                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-2'
                      >
                        Feugiat scelerisque varius morbi enim nunc faucibus a
                        pellentesque?
                      </button>
                    </h2>
                    <div
                      id='faq-content-2'
                      className='accordion-collapse collapse'
                      data-bs-parent='#faqlist1'
                    >
                      <div className='accordion-body'>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>

                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-3'
                      >
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi?
                      </button>
                    </h2>
                    <div
                      id='faq-content-3'
                      className='accordion-collapse collapse'
                      data-bs-parent='#faqlist1'
                    >
                      <div className='accordion-body'>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>
                {/* <!-- F.A.Q List 2--> */}
                <div className='accordion accordion-flush' id='faqlist2'>
                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq2-content-1'
                      >
                        Ac odio tempor orci dapibus. Aliquam eleifend mi in
                        nulla?
                      </button>
                    </h2>
                    <div
                      id='faq2-content-1'
                      className='accordion-collapse collapse'
                      data-bs-parent='#faqlist2'
                    >
                      <div className='accordion-body'>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </div>
                    </div>
                  </div>

                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq2-content-2'
                      >
                        Tempus quam pellentesque nec nam aliquam sem et tortor
                        consequat?
                      </button>
                    </h2>
                    <div
                      id='faq2-content-2'
                      className='accordion-collapse collapse'
                      data-bs-parent='#faqlist2'
                    >
                      <div className='accordion-body'>
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in
                      </div>
                    </div>
                  </div>

                  <div className='accordion-item'>
                    <h2 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq2-content-3'
                      >
                        Varius vel pharetra vel turpis nunc eget lorem dolor?
                      </button>
                    </h2>
                    <div
                      id='faq2-content-3'
                      className='accordion-collapse collapse'
                      data-bs-parent='#faqlist2'
                    >
                      <div className='accordion-body'>
                        Laoreet sit amet cursus sit amet dictum sit amet justo.
                        Mauris vitae ultricies leo integer malesuada nunc vel.
                        Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                        eget lorem dolor sed. Ut venenatis tellus in metus
                        vulputate eu scelerisque. Pellentesque diam volutpat
                        commodo sed egestas egestas fringilla phasellus
                        faucibus. Nibh tellus molestie nunc non blandit massa
                        enim nec.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- End #main --> */}
    </>
  );
};

export default homePage;
