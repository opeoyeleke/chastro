import React, { FC } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from "antd";

import "./dashboard.scss";
import { RootState } from "./../../redux/root-reducer";
import { CurrentUser } from "./../../redux/user/user.types";

import { NavBarLarge, NavBarSmall } from "./NavBar/NavBar";
import HeaderComponent from "./Header/Header";
import Find from "./Find/Find";
import Message from "./Message/Message";
import Friends from "./Friends/Friends";
import Overview from "./Overview/Overview";

const { Content } = Layout;

interface DashboardProps {
  currentUser: CurrentUser;
}

const Dashboard: FC<DashboardProps> = ({ currentUser }) => {
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div className="large-container">
        <Layout>
          <NavBarLarge />
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <HeaderComponent />
            <Content className="dashboard">
              <Switch>
                <Route exact path={`/dashboard/message`} component={Message} />
                <Route exact path={`/dashboard/find`} component={Find} />
                <Route exact path={`/dashboard/friends`} component={Friends} />
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

      <div className="small-container">
        <NavBarSmall />
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Dashboard);
