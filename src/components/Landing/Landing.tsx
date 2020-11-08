import React, { FC, useState, useEffect } from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { Button } from "antd";
import Hamburger from "hamburger-react";
import { connect } from "react-redux";

import "./landing.scss";
import Logo from "./../../assets/logo.svg";
import Chatting from "./../../assets/chatting.svg";
import { CurrentUser } from "./../../redux/user/user.types";
import { RootState } from "./../../redux/root-reducer";
import Loading from "./../Loading/Loading";

const { Header, Footer, Content } = Layout;

interface LandingProps {
  currentUser: CurrentUser;
}

const Landing: FC<LandingProps> = ({ currentUser }) => {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  if (loading) return <Loading />;

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
            <Button type="primary">
              {currentUser ? (
                <Link to="/dashboard">Dashboard</Link>
              ) : (
                <Link to="/login">Log in</Link>
              )}
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
                  <Button type="primary">
                    {currentUser ? (
                      <Link to="/dashboard">Dashboard</Link>
                    ) : (
                      <Link to="/login">Log in</Link>
                    )}
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
        made with ❤ by <a href="https://github.com/opeoyeleke/">opeoyeleke</a>
      </Footer>
    </Layout>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Landing);
