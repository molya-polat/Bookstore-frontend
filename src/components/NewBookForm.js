import React from 'react';
import '../css/table.css';
 import { addNewBook } from '../services/userService'
import {Form, Input,  Button, message} from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import axios from "axios";
import qs from "qs";
import {history} from "../utils/historyUtils";


const formItemLayout = {
    labelCol: {xs: {span: 24,}, sm: {span: 8,},},
    wrapperCol: {xs: {span: 24,}, sm: {span: 16,},},
};
const tailFormItemLayout = {
    wrapperCol: {xs: {span: 24, offset: 0,}, sm: {span: 16, offset: 8,},},
};

export default function NewBookForm(){
    const [form] = Form.useForm();

    const onFinish = values => {
        axios.post("http://localhost:8080/addNewBook", qs.stringify(values))
            .then(response =>{if(response.data.status===0){
                message.error(response.data.msg);
            }else{
                history.push('./home');
                message.success(response.data.msg);
            }    })
            .catch(error=>console.log(error));
    };



    return (
        <Form
            {...formItemLayout}
            form={form}
            className="content"
            style={{color:"white",marginLeft:"300px"}}
            name="register"
            onFinish={onFinish}
            scrollToFirstError
        >
            <Form.Item
                name="title"
                label="New book title"
                rules={[
                    {
                        required: true,
                        message: 'New book title',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="author"
                label="New book author"
                rules={[
                    {
                        required: true,
                        message: 'New book author',
                    },
                ]}
            >
                <Input />
            </Form.Item>
                <Form.Item
                    name="isbn"
                    label="New book ISBN"
                    rules={[
                        {
                            required: true,
                            message: 'New book ISBN',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                    <Form.Item
                        name="language"
                        label="New book language"
                        rules={[
                            {
                                required: true,
                                message: 'New book language',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                        <Form.Item
                            name="published"
                            label="New book published year"
                            rules={[
                                {
                                    required: true,
                                    message: 'New book published year',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                            <Form.Item
                                name="sales"
                                label="New book sales"
                                rules={[
                                    {
                                        required: true,
                                        message: 'New book sales',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                                <Form.Item
                                    name="price"
                                    label="New book price"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'New book price',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                    <Form.Item
                                        name="stock"
                                        label="New book stock"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'New book stock',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                         name="info"
                                         label="New book info"
                                            rules={[
                                                {
                                            required: true,
                                             message: 'New book info',
                                                 },
                                                ]}
                                                 >
                                            <Input />
                                          </Form.Item>
                                        <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
};
