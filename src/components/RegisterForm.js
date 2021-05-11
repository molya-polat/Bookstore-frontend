import React from 'react';
import { register } from '../services/userService'
import { Form, Input,Checkbox, Button} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';


const formItemLayout = {
    labelCol: {xs: {span: 24,}, sm: {span: 8,},},
    wrapperCol: {xs: {span: 24,}, sm: {span: 16,},},
};
const tailFormItemLayout = {
    wrapperCol: {xs: {span: 24, offset: 0,}, sm: {span: 16, offset: 8,},},
};

export default function RegisterForm(){
    const [form] = Form.useForm();

    const onFinish = values => {
         register(values);
    };



    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
        >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                    {
                        type: 'email',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="password"
                label="Password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
                hasFeedback
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                           if(getFieldValue('password') !== value)
                            return Promise.reject('');
                            if (getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="username"
                label={
                    <span>
            Username&nbsp;
                        {/*<Tooltip title="What do you want others to call you?">*/}
              <QuestionCircleOutlined />
            {/*</Tooltip>*/}
          </span>
                }
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="address"
                label={
                    <span>
            Address&nbsp;
                        {/*<Tooltip title="We will send all your orders to this address!">*/}
              <QuestionCircleOutlined />
            {/*</Tooltip>*/}
          </span>
                }
                rules={[
                    {
                        required: true,
                        message: 'Please input your address!',
                        whitespace: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                    {
                        validator: (_, value) =>
                            value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                    },
                ]}
                {...tailFormItemLayout}
            >
                <Checkbox>
                    I have read the <a href="./">agreement</a>
                </Checkbox>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};
