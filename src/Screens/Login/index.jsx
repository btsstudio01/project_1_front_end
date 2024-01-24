import React from 'react';
import "./index.css"
// import backgroundImage from '../../Assets/login/background/image(1).png';
import icon from "../../Assets/login/background/Group 1.svg"
import { Button, Checkbox, Form, Input } from 'antd';
import { redirect, useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    navigate("/Home");
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="backg flex items-center justify-center flex-col">
      <div className='flex items-center justify-center mb-4 gap-4'>
        <img src={icon} alt="" />
        <h4 className='text-white font-semibold lg:text-xl'>Buzz Coworking</h4>
      </div>
      <div className="w-11/12 md:w-3/6 lg:w-96 rounded-lg shadow-md bg-white p-5">
        <h4 className='flex items-center justify-center font-bold	mb-6 text-xl'>Login</h4>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 25,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h4>Email Address</h4>
          <Form.Item
            name="Email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <h4>Password</h4>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
          // wrapperCol={{
          //   span: 16,
          // }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
          // wrapperCol={{
          //   offset: 8,
          //   span: 16,
          // }}
          >
            <Button type="primary" htmlType="submit" className=' bg-[#6366f1] w-full ' >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default App;
