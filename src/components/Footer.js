import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
  return (
    <div>
      <footer class="row">
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h4 class="display-6 fw-normal">Quick links</h4>
          <ul class="nav flex-column">
            <li class="nav-item">
              <a href="#" class="p-0">
                {" "}
                Home{" "}
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="p-0">
                {" "}
                Our Products{" "}
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="p-0">
                {" "}
                About us{" "}
              </a>
            </li>
          </ul>
        </div>

        <div class="col-md-6 col-lg-3 offset-lg-1 mb-4 mb-lg-0">
          <p class="m-0">© Copyright 2024 SOKO.</p>
          <p>Distributed By: Group 6 EXE101</p>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
