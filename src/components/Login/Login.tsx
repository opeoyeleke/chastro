import React, { FC, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Logo from "./../../assets/logo.svg";
import { signInWithGoogle, auth } from "../../firebase/firebase";
import { CurrentUser } from "./../../redux/user/user.types";
import { RootState } from "./../../redux/root-reducer";
import Loading from "./../Loading/Loading";

interface LoginValues {
  remember: boolean;
  email: string;
  password: string;
}

interface LoginProps {
  currentUser: CurrentUser;
}

const Login: FC<LoginProps> = ({ currentUser }) => {
  const [loading, setLoading] = useState(true);

  const onFinish = async (values: LoginValues) => {
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  }, [loading]);

  if (loading) return <Loading />;

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }
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
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
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
              <Button onClick={signInWithGoogle}>Sign in with Google</Button>
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

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Login);
