import React, { FC } from "react";
import { Layout } from "antd";

import "./dashboard.scss";

const { Header, Footer, Sider, Content } = Layout;

const Dashboard: FC = () => {
  return (
    <Layout>
      <Sider className="sidebar main">Sider</Sider>
      <Layout>
        <Header>Main</Header>

        <Layout>
          <Sider className="sidebar">Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
