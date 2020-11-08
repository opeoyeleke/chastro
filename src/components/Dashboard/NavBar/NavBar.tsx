import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  PieChartOutlined,
  SearchOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { auth } from "./../../../firebase/firebase";

const NavBar: FC = () => {
  const { Sider } = Layout;

  return (
    <Sider>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to="/dashboard/overview">Overview</NavLink>
        </Menu.Item>
        <Menu.Item key="2" icon={<SearchOutlined />}>
          <NavLink to="/dashboard/find">Find</NavLink>
        </Menu.Item>
        <Menu.Item key="3" icon={<MessageOutlined />}>
          <NavLink to="/dashboard/message">Messages</NavLink>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <NavLink to="/dashboard/friends">Friends</NavLink>
        </Menu.Item>
        <Menu.Item key="5" icon={<SettingOutlined />}>
          <NavLink to="/dashboard/settings">Settings</NavLink>
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
  );
};

export default NavBar;
