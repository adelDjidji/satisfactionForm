import React from "react";
import {
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet
  } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";

const FormLogin = () => {
    let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    const user = {
      name: "Admin",
      toekn: "test",
    };
    localStorage.setItem("user", JSON.stringify(user));
    // navigate("/")
    window.location.reload()
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div>
        <h2>Connexion</h2>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mot de passe"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Connexion
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default FormLogin;
