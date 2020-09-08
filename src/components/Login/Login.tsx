import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "./../../assets/logo.svg";

const Login: FC = () => {
  const onFinish = (values: object) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="page-container">
      <div className="page-left">
        <div className="title">
          <img src={Logo} alt="app-logo" />
          <div className="app-name white">
            <Link to="/">chastro</Link>
          </div>
        </div>
        <div className="desc">
          Join people around the world and enjoy a comprehensive communication
          experience
        </div>
        <div className="detail">
          Connect with people irrespective of where you are from
        </div>
      </div>

      <div className="page-right login">
        <div className="form-container">
          <div
            className="ant-form-item-control-input-content"
            style={{ marginBottom: "10px" }}
          >
            Login to your account:
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              <Button
                onClick={() => {
                  alert("hello");
                }}
              >
                Sign in with Google
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="already">
          Don't have an account ?
          <span>
            <Link to="/register"> Register</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
