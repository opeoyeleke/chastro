import React, { FC, useState } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import Hamburger from "hamburger-react";

import "./Landing.scss";
import Logo from "./../../assets/logo.svg";

const { Header, Footer, Content } = Layout;

const Landing: FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="nav-large">
          <div className="nav-left">
            <img src={Logo} alt="app-logo" />
            <div className="app-name">chastro</div>
          </div>
          <div className="nav-center">
            <ul>
              <li>Features</li>
              <li>FAQs</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="nav-right">
            <Button type="primary" className="button">
              <Link to="/register">Register</Link>
            </Button>
            <Button type="primary" className="button" icon={<LoginOutlined />}>
              <Link to="/login">Log in</Link>
            </Button>
          </div>
        </div>
        <div className="mobile-nav">
          <Hamburger rounded toggled={isOpen} toggle={setOpen} />
          {isOpen ? (
            <div className="mobile-nav-menu">
              <ul>
                <li>Features</li>
                <li>FAQs</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                  <Button type="primary" className="button">
                    <Link to="/register">Register</Link>
                  </Button>
                  <Button
                    type="primary"
                    className="button"
                    icon={<LoginOutlined />}
                  >
                    <Link to="/login">Log in</Link>
                  </Button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </Header>
      <Content className="content">Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Landing;
