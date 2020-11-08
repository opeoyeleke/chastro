import React, { FC } from "react";
import { Layout } from "antd";

const HeaderComponent: FC = () => {
  const { Header } = Layout;

  return <Header className="site-layout-background dashboard" />;
};

export default HeaderComponent;
