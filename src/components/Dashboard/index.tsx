import React, { FC } from "react";
import { connect } from "react-redux";
import { Link, NavLink, Switch, Route } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  PieChartOutlined,
  SearchOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  MessageOutlined,
} from "@ant-design/icons";

import "./dashboard.scss";
import { RootState } from "./../../redux/root-reducer";
import { auth } from "./../../firebase/firebase";
import { CurrentUser } from "./../../redux/user/user.types";
import Message from "./Message/Message";

const { Header, Content, Footer, Sider } = Layout;

interface DashboardProps {
  currentUser: CurrentUser;
}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <Layout>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["3"]}>
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<SearchOutlined />}>
            Find
          </Menu.Item>
          <Menu.Item key="3" icon={<MessageOutlined />}>
            <NavLink to="/dashboard/message">Messages</NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Friends
          </Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item
            key="6"
            icon={<LogoutOutlined />}
            onClick={() => {
              auth.signOut();
            }}
          >
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background dashboard" />
        <Content>
          <Switch>
            <Route exact path={`/dashboard/message`} component={Message} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Dashboard);
