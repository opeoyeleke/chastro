import React, { FC } from "react";
import { Layout, Menu } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  PieChartOutlined,
  SearchOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { auth } from "./../../../firebase/firebase";

export const NavBarLarge: FC = () => {
  const { Sider } = Layout;
  const dispatch = useDispatch();

  return (
    <Sider>
      <div className="logo">
        <Link to="/">Chastro</Link>
      </div>
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
            dispatch({ type: "DESTROY_SESSION" });
            localStorage.clear();
            setTimeout(function () {
              window.location.href = "/";
            }, 1000);
          }}
        >
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export const NavBarSmall: FC = () => {
  return (
    <div className="mobile-nav">
      <NavLink to="/dashboard/overview" activeClassName="active">
        <div className="mobile-nav-item">
          <PieChartOutlined />
          <span>Overview</span>
        </div>
      </NavLink>
      <NavLink to="/dashboard/find" activeClassName="active">
        <div className="mobile-nav-item">
          <SearchOutlined />
          <span>Search</span>
        </div>
      </NavLink>
      <NavLink to="/dashboard/message" activeClassName="active">
        <div className="mobile-nav-item">
          <MessageOutlined />
          <span>Messages</span>
        </div>
      </NavLink>
      <NavLink to="/dashboard/friends" activeClassName="active">
        <div className="mobile-nav-item">
          <UserOutlined />
          <span>Friends</span>
        </div>
      </NavLink>
    </div>
  );
};
