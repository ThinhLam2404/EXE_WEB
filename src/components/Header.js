import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "./context/AuthContext"; // Đoạn mã này có thể được thêm lại nếu bạn có chức năng xác thực người dùng.
import logo from "../assets/images/main-logo.png";
const Header = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const items = [
    { label: "HOME", key: "HOME" },
    { label: <Link to="/customer/tshirt">T-SHIRT</Link>, key: "ABOUT US" },
    { label: "OTHER", key: "SALE" },
  ];

  return (
    <header id="header">
      <nav className="header-top bg-secondary py-1">
        <div className="container-fluid padding-side">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <ul className="info d-flex flex-wrap list-unstyled m-0">
              <li
                className="location text-capitalize d-flex align-items-center me-4"
                style={{ fontSize: "14px" }}
              >
                <svg className="color me-1" width="15" height="15">
                  <use xlinkHref="#location"></use>
                </svg>
                600 Nguyễn Văn Cừ Nối Dài, An Bình, Bình Thủy, Cần Thơ
              </li>
              <li
                className="phone d-flex align-items-center me-4"
                style={{ fontSize: "14px" }}
              >
                <svg className="color me-1" width="15" height="15">
                  <use xlinkHref="#phone"></use>
                </svg>
                +666 333 9999
              </li>
              <li
                className="time d-flex align-items-center me-4"
                style={{ fontSize: "14px" }}
              >
                <svg className="color me-1" width="15" height="15">
                  <use xlinkHref="#email"></use>
                </svg>
                yourinfo@yourmail.com
              </li>
            </ul>
            <ul className="social-links d-flex flex-wrap list-unstyled m-0">
              {["facebook", "twitter", "linkedin", "instagram", "youtube"].map(
                (platform) => (
                  <li key={platform} className="social ms-4">
                    <a href="#">
                      <svg className="social" width="16" height="16">
                        <use xlinkHref={`#${platform}`}></use>
                      </svg>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav id="primary-header" className="navbar navbar-expand-lg py-4">
        <div className="container-fluid padding-side">
          <div className="d-flex justify-content-between align-items-center w-100">
            <Link className="navbar-brand" to="/">
              <img src={logo} className="logo img-fluid" alt="Main Logo" />
            </Link>
            <button
              className="navbar-toggler border-0 d-flex d-lg-none order-3 p-2 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#bdNavbar"
              aria-controls="bdNavbar"
              aria-expanded="false"
            >
              <svg className="navbar-icon" width="60" height="60">
                <use xlinkHref="#navbar-icon"></use>
              </svg>
            </button>
            <div
              className="header-bottom offcanvas offcanvas-end"
              id="bdNavbar"
              aria-labelledby="bdNavbarOffcanvasLabel"
            >
              <div className="offcanvas-header px-4 pb-0">
                <button
                  type="button"
                  className="btn-close btn-close-black mt-2"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  data-bs-target="#bdNavbar"
                ></button>
              </div>
              <div className="offcanvas-body align-items-center justify-content-center">
                <div className="search d-block d-lg-none m-5">
                  <form className="position-relative">
                    <input
                      type="text"
                      className="form-control bg-secondary border-0 rounded-5 px-4 py-2"
                      placeholder="Search..."
                    />
                    <a
                      href="#"
                      className="position-absolute top-50 end-0 translate-middle-y p-1 me-3"
                    >
                      <svg width="20" height="20">
                        <use xlinkHref="#search"></use>
                      </svg>
                    </a>
                  </form>
                </div>
                <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
                  <li className="nav-item px-3">
                    <Link className="nav-link active p-0" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link p-0" to="/explore">
                      Explore
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link p-0" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
