import React, { FC, useState } from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import Hamburger from "hamburger-react";
import { connect } from "react-redux";

import "./landing.scss";
import { ReactComponent as Chatting } from "assets/chatting.svg";
import { CurrentUser } from "redux/user/user.types";
import { RootState } from "redux/root-reducer";

const { Header, Footer, Content } = Layout;

interface LandingProps {
  currentUser: CurrentUser;
}

const Landing: FC<LandingProps> = ({ currentUser }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="nav-large">
          <div className="nav-left">
            <div className="app-name">chastro</div>
          </div>

          <div className="nav-center"></div>

          <div className="nav-right">
            <ul>
              <li>
                <NavLink to="/register">register</NavLink>
              </li>
            </ul>
            <Button type="primary">
              {currentUser ? (
                <NavLink to="/dashboard/overview">Dashboard</NavLink>
              ) : (
                <NavLink to="/login">Log in</NavLink>
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
                      <NavLink to="/dashboard/overview">Dashboard</NavLink>
                    ) : (
                      <NavLink to="/login">Log in</NavLink>
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
              <NavLink to="/register">Get Started</NavLink>
            </Button>
            <Button type="ghost">
              <NavLink to="/login">Log in</NavLink>
            </Button>
          </div>
          <div className="banner-right">
            <Chatting className="landing-image" />
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
