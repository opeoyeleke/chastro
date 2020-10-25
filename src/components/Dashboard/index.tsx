import React, { FC, useState } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  PieChartOutlined,
  SearchOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./dashboard.scss";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard: FC = () => {
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
            Messages
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            Friends
          </Menu.Item>
          <Menu.Item key="5" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="6" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" />
        <Content>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            ...
            <br />
            Really
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            long
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            ...
            <br />
            content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
