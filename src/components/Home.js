import React from "react";
import qrImage from "../assets/images/qr.png";
import sliderImage from "../assets/images/slider-image.jpg";
import room1Image from "../assets/images/room1.jpg";
import room2Image from "../assets/images/room2.jpg";
import room3Image from "../assets/images/room3.jpg";
import item1Image from "../assets/images/item1.jpg";
import item2Image from "../assets/images/item2.jpg";
import item3Image from "../assets/images/item3.jpg";
import patternImage from "../assets/images/pattern2.png";

function Home() {
  return (
    <>
      {/* Slider Section */}
      <section id="slider" data-aos="fade-up">
        <div className="container-fluid padding-side">
          <div
            className="d-flex rounded-5"
            style={{
              backgroundImage: `url(${sliderImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "85vh",
              backgroundPosition: "center",
            }}
          >
            <div className="row align-items-center m-auto pt-5 px-4 px-lg-0">
              <div className="text-start col-md-6 col-lg-5 col-xl-6 offset-lg-1">
                <h2 className="display-1 fw-normal" style={{ color: "white" }}>
                  SOKO - Your Health to Serenity.
                </h2>
                <a href="#" className="btn btn-arrow btn-primary mt-3">
                  <span>
                    Explore more
                    <svg width="18" height="18">
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4 mt-5 mt-md-0">
                <form
                  id="form"
                  className="form-group flex-wrap bg-white p-5 rounded-4 ms-md-5"
                >
                  <div
                    style={{
                      backgroundImage: `url(${qrImage})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "35vh",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Section */}
      <section id="room" className="padding-medium">
        <div className="container-fluid padding-side" data-aos="fade-up">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <h3 className="display-3 fw-normal text-center">
              Explore our products
            </h3>
          </div>

          <div className="swiper room-swiper mt-5">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="room-item position-relative bg-black rounded-4 overflow-hidden">
                  <img
                    src={room1Image}
                    alt="Room 1"
                    className="post-image img-fluid rounded-4"
                  />
                </div>
                <div className="room-content text-center mt-3">
                  <h4 className="display-6 fw-normal">
                    <a href="index.html">Nutritional seed cake</a>
                  </h4>
                  <p>
                    <span className="text-primary fs-4">6000 vnd</span>/cake
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="room-item position-relative bg-black rounded-4 overflow-hidden">
                  <img
                    src={room3Image}
                    alt="Room 3"
                    className="post-image img-fluid rounded-4"
                  />
                </div>
                <div className="room-content text-center mt-3">
                  <h4 className="display-6 fw-normal">
                    <a href="index.html">Brown Rice Cake</a>
                  </h4>
                  <p>
                    <span className="text-primary fs-4">6000 vnd</span>/cake
                  </p>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="room-item position-relative bg-black rounded-4 overflow-hidden">
                  <img
                    src={room2Image}
                    alt="Room 2"
                    className="post-image img-fluid rounded-4"
                  />
                </div>
                <div className="room-content text-center mt-3">
                  <h4 className="display-6 fw-normal">
                    <a href="index.html">Oatmeal cookies</a>
                  </h4>
                  <p>
                    <span className="text-primary fs-4">6000 vnd</span>/cake
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination room-pagination position-relative mt-5"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" data-aos="fade-up">
        <h3 className="display-3 fw-normal text-center">About Us</h3>
        <p className="text-center col-lg-4 offset-lg-4 mb-5">
          Our nutritional products project was born to bring a convenient and
          healthy nutritional solution to busy people, especially office workers
          and sports enthusiasts.
        </p>
        <div className="container position-relative">
          <div className="row">
            <div
              className="swiper gallery-swiper offset-1 col-10"
              style={{ height: "600px" }}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img
                    src={item3Image}
                    alt="Item 3"
                    className="img-fluid rounded-4"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src={item2Image}
                    alt="Item 2"
                    className="img-fluid rounded-4"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src={item1Image}
                    alt="Item 1"
                    className="img-fluid rounded-4"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="padding-medium">
        <div className="container-fluid padding-side" data-aos="fade-up">
          <h3 className="display-3 text-center fw-normal col-lg-4 offset-lg-4">
            Benefits of our products
          </h3>
          <div className="row mt-5">
            <div className="col-md-6 col-xl-4">
              <div className="service mb-4 text-center rounded-4 p-5">
                <div className="position-relative">
                  <svg className="color" width="70" height="70">
                    <use xlinkHref="#meditation"></use>
                  </svg>
                  <img
                    src={patternImage}
                    alt="pattern"
                    className="position-absolute top-100 start-50 translate-middle z-n1 pe-5"
                  />
                </div>
                <h4 className="display-6 fw-normal my-3">Weight Control</h4>
                <p>
                  With high fiber and protein content, nutritional cakes help
                  maintain a feeling of fullness longer without consuming many
                  calories. This helps you control the amount of food you eat
                  while still getting enough nutrition for your body to function
                  well.
                </p>
                <a href="index.html" className="btn btn-arrow">
                  <span className="text-decoration-underline">
                    Read More
                    <svg width="18" height="18">
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service mb-4 text-center rounded-4 p-5">
                <div className="position-relative">
                  <svg className="color" width="70" height="70">
                    <use xlinkHref="#chef-hat"></use>
                  </svg>
                  <img
                    src={patternImage}
                    alt="pattern"
                    className="position-absolute top-100 start-50 translate-middle z-n1 pe-5"
                  />
                </div>
                <h4 className="display-6 fw-normal my-3">Dining</h4>
                <p>
                  Nutritional cake is a versatile dish, suitable for many
                  different diets such as vegetarian, keto, or gluten-free. You
                  can easily choose nutritional cakes that suit your personal
                  nutritional needs, while ensuring it does not affect the diet
                  you are following.
                </p>
                <a href="index.html" className="btn btn-arrow">
                  <span className="text-decoration-underline">
                    Read More
                    <svg width="18" height="18">
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="service mb-4 text-center rounded-4 p-5">
                <div className="position-relative">
                  <svg className="color" width="70" height="70">
                    <use xlinkHref="#healthy-food"></use>
                  </svg>
                  <img
                    src={patternImage}
                    alt="pattern"
                    className="position-absolute top-100 start-50 translate-middle z-n1 pe-5"
                  />
                </div>
                <h4 className="display-6 fw-normal my-3">Energy</h4>
                <p>
                  Nutritional cakes are high in fiber and protein, providing a
                  steady source of energy throughout the day. This is a great
                  choice for people who want to replenish energy after
                  exercising or who need to work all day but don't have time to
                  prepare meals.
                </p>
                <a href="index.html" className="btn btn-arrow">
                  <span className="text-decoration-underline">
                    Read More
                    <svg width="18" height="18">
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
