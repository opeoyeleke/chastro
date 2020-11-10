import React, { FC, useState } from "react";
import { Layout, Menu } from "antd";
import { TabBar } from "antd-mobile";
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

export const NavBarLarge: FC = () => {
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

export const NavBarSmall: FC = () => {
  const [selectedTab, setSelectedTab] = useState("redTab");

  return (
    <div className="mobile-nav">
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={false}
      >
        <TabBar.Item
          title="Life"
          key="Life"
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat",
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat",
              }}
            />
          }
          selected={selectedTab === "blueTab"}
          badge={1}
          onPress={() => {
            setSelectedTab("blueTab");
          }}
          data-seed="logId"
        >
          hello
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat",
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat",
              }}
            />
          }
          title="Koubei"
          key="Koubei"
          badge={"new"}
          selected={selectedTab === "redTab"}
          onPress={() => {
            setSelectedTab("redTab");
          }}
          data-seed="logId1"
        >
          hekko{" "}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat",
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "22px",
                height: "22px",
                background:
                  "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat",
              }}
            />
          }
          title="Friend"
          key="Friend"
          dot
          selected={selectedTab === "greenTab"}
          onPress={() => {
            setSelectedTab("greenTab");
          }}
        >
          hsshshsh{" "}
        </TabBar.Item>
        <TabBar.Item
          icon={{
            uri:
              "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg",
          }}
          selectedIcon={{
            uri:
              "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg",
          }}
          title="My"
          key="my"
          selected={selectedTab === "yellowTab"}
          onPress={() => {
            setSelectedTab("yellowTab");
          }}
        >
          yellow{" "}
        </TabBar.Item>
      </TabBar>
    </div>
  );
};
