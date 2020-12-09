import React, { FC } from "react";
import { Layout } from "antd";
import { SmileTwoTone } from "@ant-design/icons";

interface HeaderProps {
  displayName: string;
}

export const HeaderLarge: FC<HeaderProps> = ({ displayName }) => {
  const { Header } = Layout;

  return (
    <Header className="site-layout-background dashboard">
      <div className="header-left">Dashboard</div>
      <div className="header-right">
        <SmileTwoTone />
      </div>
    </Header>
  );
};

export const HeaderSmall: FC<HeaderProps> = ({ displayName }) => {
  const { Header } = Layout;

  return (
    <Header className="small">
      <div className="header-left">Dashboard</div>
      <div className="header-right">
        <SmileTwoTone />
      </div>
    </Header>
  );
};
