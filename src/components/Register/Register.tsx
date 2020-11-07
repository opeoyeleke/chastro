import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Tooltip, Checkbox, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import {
  signInWithGoogle,
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase";

import "./register.scss";
import Logo from "./../../assets/logo.svg";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 13,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 20,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface RegisterValues {
  aggrement: boolean;
  confirm: string;
  email: string;
  displayName: string;
  password: string;
}

const Register: FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: RegisterValues) => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        values?.email,
        values?.password
      );
      await createUserProfileDocument(user, {
        displayName: values?.displayName,
      });
    } catch (error) {
      alert(error.message);
    }
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

      <div className="page-right">
        <div className="form-container">
          <div
            className="ant-col ant-form-item-control ant-col-xs-20 ant-col-xs-offset-0 ant-col-sm-16 ant-col-sm-offset-8"
            style={{ marginBottom: "10px" }}
          >
            Create an account:
          </div>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input placeholder="E-mail" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Password: minimum 6 characters" />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
            <Form.Item
              name="displayName"
              label={
                <span>
                  Username&nbsp;
                  <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>I aggree to the terms</Checkbox>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                Register
              </Button>

              <Button onClick={signInWithGoogle}>Sign up with Google</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="already">
          Already have an account ?
          <span>
            <Link to="/login"> Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
