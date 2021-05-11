import React from 'react';
import { login } from '../services/userService'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const onFinish = values => {
    console.log('Received values of form: ', values);
    login(values);
};

export class LoginForm extends React.Component {
    render() {
        return (
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' },
                        { min:3, message: 'Username should be greater than three!' },
                        { max:8, message: 'Username should be less than eight!' }]}
                >
                    <Input
                         prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' },
                        { min:3, message: 'Username should be greater than three!' },
                        { max:8, message: 'Username should be less than eight!' }]}
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
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    <Link  to={{pathname: '/register' }}>
                    <Button type="primary"  className="login-form-button">
                        Register
                        </Button>
                        </Link>
                </Form.Item>
            </Form>
        );
    }
}
