import React from "react";
import "../assets/css/footer.css";
import { Col, Row } from "antd";
import {
  EnvironmentFilled,
  PhoneFilled,
  MailFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="container" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} className="footer-content">
          <div className="footer-item--title">FANPAGE</div>
          <a
            href="https://www.facebook.com/profile.php?id=61567964282542"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookFilled className="fb-icon" />
          </a>
          <InstagramFilled className="fb-icon" />
        </Col>

        <Col xs={24} sm={12} md={8} className="footer-content">
          <div className="footer-item--title">CONTACT</div>
          <div>
            <EnvironmentFilled /> 600 Nguyễn Văn Cừ Nối Dài, Cần Thơ
          </div>
          <div>
            <PhoneFilled /> +666 333 9999
          </div>
          <div>
            <MailFilled /> customercare@sono.com
          </div>
        </Col>
      </Row>

      <Row
        justify="center"
        className="footer-bottom"
        style={{ marginTop: "20px", textAlign: "center" }}
      >
        <Col span={24}>
          © Copyright 2024 SOKO. Distributed By: Group 6 EXE101
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
