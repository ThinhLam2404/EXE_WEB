import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/images/logo-web.jpg";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  const menuItems = [
    { label: <Link to="/">Home</Link>, key: "home" },
    { label: <Link to="/explore">Calculate</Link>, key: "calculate" },
    { label: <Link to="/about">About</Link>, key: "about" },
  ];

  return (
    <header>
      {/* Phần đầu thông tin liên hệ */}
      <Row
        className="header-top"
        justify="space-between"
        align="middle"
        style={{
          backgroundColor: "#f06921",
          // padding: "10px 20px"
        }}
      >
        {/* <Col xs={24} md={12} lg={8}>
          <div className="d-flex flex-wrap">
            <span style={{ fontSize: "14px", marginRight: "20px" }}>
              600 Nguyễn Văn Cừ Nối Dài, Cần Thơ
            </span>
            <span style={{ fontSize: "14px", marginRight: "20px" }}>
              +666 333 9999
            </span>
            <span style={{ fontSize: "14px" }}>sono@yourmail.com</span>
          </div>
        </Col> */}
        {/* <Col xs={24} md={12} lg={8}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "14px",
            }}
          >
            <div
              style={{ display: "flex", flexWrap: "wrap", marginBottom: "8px" }}
            >
              <span style={{ marginRight: "20px" }}>
                600 Nguyễn Văn Cừ Nối Dài, Cần Thơ
              </span>
              <span style={{ marginRight: "20px" }}>+666 333 9999</span>
              <span>customercare@sono.com</span>
            </div>
          </div>
        </Col> */}

        {/* <Col xs={24} md={12} lg={8} className="text-right">
          <div className="social-links">
            {["facebook", "twitter", "linkedin", "instagram", "youtube"].map(
              (platform) => (
                <a
                  href="#"
                  key={platform}
                  className="social-link"
                  style={{ marginLeft: "15px" }}
                >
                  <svg width="16" height="16">
                    <use xlinkHref={`#${platform}`}></use>
                  </svg>
                </a>
              )
            )}
          </div>
        </Col> */}
      </Row>

      {/* Navbar chính */}
      <Row
        className="header-main"
        justify="space-between"
        align="middle"
        style={{ padding: "15px 20px" }}
      >
        <Col xs={18} md={6}>
          <Link to="#">
            <img src={logo} alt="Main Logo" style={{ maxWidth: "80px" }} />
          </Link>
        </Col>
        <Col xs={0} md={12} lg={12}>
          {/* <Menu
            mode="horizontal"
            items={menuItems}
            style={{ justifyContent: "center", border: "none" }}
          /> */}
        </Col>
        <Col xs={6} md={0} className="text-right">
          <Button icon={<MenuOutlined />} onClick={showDrawer} type="text" />
        </Col>
      </Row>

      {/* Drawer cho menu di động */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        {/* <Menu mode="vertical" items={menuItems} onClick={closeDrawer} /> */}
      </Drawer>
    </header>
  );
};

export default Header;
