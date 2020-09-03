import React, { FC, useState } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

import Hamburger from "hamburger-react";

import "./Landing.scss";
import Logo from "./../../assets/logo.svg";
import Chatting from "./../../assets/chatting.svg";

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
            <Button type="primary" icon={<LoginOutlined />}>
              <Link to="/login">Log in</Link>
            </Button>
          </div>
        </div>

        <div className="mobile-nav">
          <Hamburger rounded size={20} toggled={isOpen} toggle={setOpen} />

          {isOpen ? (
            <div className="mobile-nav-menu">
              <ul>
                <li>Features</li>
                <li>FAQs</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                  <Button type="primary" icon={<LoginOutlined />}>
                    <Link to="/login">Log in</Link>
                  </Button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </Header>

      <Content className="content">
        <div className="banner-container">
          <div className="banner-left">
            <div className="title">Connecting Users Worldwide</div>
            <div className="desc">
              Connect to people no matter who you are or where you are
            </div>

            <Button type="primary">
              <Link to="/register">Get Started Now</Link>
            </Button>
          </div>
          <div className="banner-right">
            <img src={Chatting} alt="text vector" />
          </div>
        </div>
      </Content>

      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Landing;
