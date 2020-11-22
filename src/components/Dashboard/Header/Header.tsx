import React, { FC } from "react";
import { Layout } from "antd";

export const HeaderLarge: FC = () => {
  const { Header } = Layout;

  return <Header className="site-layout-background dashboard" />;
};

export const HeaderSmall: FC = () => {
  const { Header } = Layout;

  return <Header className="small">Header</Header>;
};
