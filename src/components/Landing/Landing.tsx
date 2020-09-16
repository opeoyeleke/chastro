import React, { FC, useState } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { LoginOutlined } from "@ant-design/icons";

import Hamburger from "hamburger-react";

import "./landing.scss";
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

          <div className="nav-center"></div>

          <div className="nav-right">
            <ul>
              <li>Features</li>
              <li>FAQs</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
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
              Join people around the world and enjoy a comprehensive
              communication experience{" "}
            </div>

            <Button type="primary">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
          <div className="banner-right">
            <img src={Chatting} alt="text vector" />
          </div>
        </div>
      </Content>

      <Footer>
        Made with ❤ by <a href="https://github.com/opeoyeleke/">opeoyeleke</a>
      </Footer>
    </Layout>
  );
};

export default Landing;
