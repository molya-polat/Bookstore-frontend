import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {SideBar} from "../components/SideBar";
import { getUser } from '../utils/storageUtils'

import {Button, Layout} from 'antd';
import axios from "axios";
import {Link} from "react-router-dom";


const { Header, Content, Sider} = Layout;
export class CartView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cartInfo: []}
    };
        componentDidMount()
        {
            let username = getUser().username;
            const query = this.props.location.search;
            const arr = query.split('=');
            const userId = parseInt(arr[1]);
            // const quant = parseInt(arr[2]);
            axios.get("http://localhost:8080/addToCart", {
                params: {
                    id: userId,
                    username: username
                }
            })
                .then(res => {
                    const books = res.data;
                    this.setState({cartInfo: books});
                })
        }
        render()
        {
            const list = this.state.cartInfo.map((invoice, index) => {
                return (
                    <tr key={index}>
                        {/*<Link to={{pathname: '/details', search: '?id=' + invoice.id}} >*/}
                        <td>{invoice.title}</td>
                        {/*</Link>*/}
                        <td>{invoice.author}</td>
                        <td>{'¥' + invoice.price}</td>
                        {/*<td><Button onClick={}>Delete</Button></td>*/}
                    </tr>
                )
            });
            return (
                <Layout>
                    <Header>
                        <Roof/>
                    </Header>
                    <Layout>
                        <Sider>
                            <SideBar/>
                        </Sider>
                        <Content className="site-layout-background">
                            <Content>
                                {/*<CartDetail info={this.state.cartInfo}/>*/}
                                <div className={"content"}>
                                    <div className={"book-detail"}>
                                        <div className={"descriptions"}>
                                            <h1 style={{marginLeft:"40%",color:"white"}}>My Cart</h1>
                                            <table>

                                                <th>Name</th>
                                                <th>Author</th>
                                                <th>Price</th>
                                                <tbody>
                                                {list}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className={"button-groups"}>
                                        <Link to={{pathname: '/buyBooks' }} >
                                        <Button type="danger" size={"large"} style={{marginLeft: "15%"}}>
                                            Buy now
                                        </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Content>
                        </Content>
                    </Layout>
                </Layout>
            )
        }
    }

