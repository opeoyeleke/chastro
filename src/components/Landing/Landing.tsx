import React, { FC } from "react";
import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

const Landing: FC = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Landing;
