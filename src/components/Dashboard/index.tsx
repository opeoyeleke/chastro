import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";

import "./dashboard.scss";
import { RootState } from "./../../redux/root-reducer";
import { CurrentUser } from "./../../redux/user/user.types";

import { NavBarLarge, NavBarSmall } from "./NavBar/NavBar";
import { HeaderLarge, HeaderSmall } from "./Header/Header";
import Find from "./Find/Find";
import Message from "./Message/Message";
import Friends from "./Friends/Friends";
import Overview from "./Overview/Overview";

const { Content } = Layout;

interface DashboardProps {
  currentUser: CurrentUser;
}

const Dashboard: FC<DashboardProps> = ({ currentUser }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 992);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 992);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      {isDesktop ? (
        <div className="large-container">
          <Layout>
            <NavBarLarge />
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
              <HeaderLarge displayName={currentUser?.displayName} />
              <Content className="dashboard">
                <Switch>
                  <Route
                    exact
                    path={`/dashboard/message`}
                    component={Message}
                  />
                  <Route exact path={`/dashboard/find`} component={Find} />
                  <Route
                    exact
                    path={`/dashboard/friends`}
                    component={Friends}
                  />
                  <Route
                    exact
                    path={`/dashboard/overview`}
                    component={Overview}
                  />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </div>
      ) : (
        <div className="small-container">
          <HeaderSmall displayName={currentUser?.displayName} />
          <div className="dashboard">
            <Switch>
              <Route exact path={`/dashboard/message`} component={Message} />
              <Route exact path={`/dashboard/find`} component={Find} />
              <Route exact path={`/dashboard/friends`} component={Friends} />
              <Route exact path={`/dashboard/overview`} component={Overview} />
            </Switch>
          </div>
          <NavBarSmall />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Dashboard);
