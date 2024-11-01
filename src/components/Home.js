import React from "react";
import "aos/dist/aos.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import qrImage from "./images/qr.png";
import sliderImage from "./images/slider-image.jpg";
import room1Image from "./images/room1.jpg";
import room2Image from "./images/room2.jpg";
import room3Image from "./images/room3.jpg";
import patternImage from "./images/pattern2.png";

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

              {/* More room items can be added here similarly */}
            </div>
            <div className="swiper-pagination room-pagination position-relative mt-5"></div>
          </div>
        </div>
      </section>

      {/* Other sections such as gallery and services can follow in a similar structure */}
    </>
  );
}

export default Home;
