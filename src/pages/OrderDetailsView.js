import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {SideBar} from "../components/SideBar";

import { Layout} from 'antd'
import axios from "axios";

const { Header, Content, Sider} = Layout;

export class OrderDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {orderInfo:[]};
    }
    componentDidMount() {
        const query = this.props.location.search;
        const arr = query.split('=');
        const orderId = parseInt(arr[1]);
        axios.get("http://localhost:8080/getOrderDetails?orderId="+orderId)
            .then(res => {
                const books = res.data;
                this.setState({orderInfo: books});
            })
    }

    render() {
        const list = this.state.orderInfo.map((invoice, index) => {
            return (
                <tr key={index} >
                    <td >{invoice.title}</td>
                    <td>{invoice.author}</td>
                    <td>{'¥' + invoice.price}</td>
                    <td>{'№' + invoice.isbn}</td>
                </tr>
            )
        });
        return(
            <Layout>
                <Header>
                    <Roof/>
                </Header>
                <Layout>
                    <Sider>
                        <SideBar/>
                    </Sider>
                    <Content className="site-layout-background">
                        <Content >
                            <div className={"content"}>
                                <div className={"book-detail"}>
                                    <div className={"descriptions"}>
                                        <h1 style={{marginLeft:"40%",color:"white"}}>Order Details</h1>
                                        <table>
                                            <th>Name</th>
                                            <th>Author</th>
                                            <th>Price</th>
                                            <th>ISBN</th>
                                            <tbody>
                                            {list}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
