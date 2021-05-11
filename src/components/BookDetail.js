import React from 'react'
import {Descriptions, Button, Input, Form} from 'antd';

import {
    ShoppingCartOutlined,
} from '@ant-design/icons';
import '../css/details.css'
import {Link} from "react-router-dom";

export class BookDetail extends React.Component {
    render() {
        let {info} = this.props;

        if(info == null){
            return null;
        }
        return (
            <div className={"content"}>
                <div className={"book-detail"}>
                    <div className={"descriptions"}>
                        <div className={"book-image"}><img alt={info.name} src={info.icon["iconBase64"]} style={{width:"250px", height:"300px", marginLeft: "400px"}}/></div>
                        <Descriptions>
                            <Descriptions.Item className={"title"} span={3}>{info.title}</Descriptions.Item>
                            <Descriptions.Item label={"Author: "} span={3}>{info.author}</Descriptions.Item>
                            <Descriptions.Item label={"Description: "} span={3}>{info.info}</Descriptions.Item>
                            <Descriptions.Item label={"Price: "} span={3}>{<span className={"price"}>{'¥' + info.price}</span>}</Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
                <div className={"button-groups"}>
                    <Link to={{pathname: '/addToCart', search: '?id=' + info.id  }} >
                    <Button type="danger" size={"large"} icon={<ShoppingCartOutlined/>} ghost>
                        Add to Cart
                    </Button>
                    </Link>
                </div>
            </div>

        )
    }
}
