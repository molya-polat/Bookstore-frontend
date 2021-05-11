import React from 'react';
import '../css/table.css'
import axios from 'axios';
import {Button, Layout} from 'antd';
import {Link} from "react-router-dom";
import {Roof} from "./Roof";
import { history } from '../utils/historyUtils'
import {SideBarAdmin} from "./SideBarAdmin";


const { Header, Content, Sider} = Layout;

export  class ChangeStatePage extends React.Component {
    state = {
        users: [],
        headers: ["UserID", "Username", "Address","Email", "Role","State"],
    };

    componentDidMount() {
        const query = this.props.location.search;
        const arr = query.split('=');
        const e= parseInt(arr[1]);
        axios.get(`http://localhost:8080/changeState?userId=`+e)
            .then(res => {
                const users= res.data;
                this.setState({users: users});
                history.push('/allUsers');
            })
    }

    render() {
        const list = this.state.users.map((invoice, index) => {
            return (
                <tr key={index}>
                    <td>{invoice.userId}</td>
                    <td>{invoice.username}</td>
                    <td>{invoice.address}</td>
                    <td>{invoice.email}</td>
                    <td>{invoice.type}</td>
                    <td>
                        <Link to={{pathname: '/changeState', search: '?id=' + invoice.userId}} required >
                            <Button >change</Button>
                        </Link>
                    </td>
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
                        <SideBarAdmin/>
                    </Sider>
                    <Content className="site-layout-background">
                        <Content>
            <div id="Table">
                <h1 className="content" style={{marginLeft:"40%",color:"white"}}>All Users</h1>
                <table>
                    <thead>
                    <tr>
                        {this.state.headers.map(function (title, idx) {
                            return <th key={idx}>{title}</th>;
                        }, this)
                        }</tr>
                    </thead>
                    <tbody>
                    {list}
                    </tbody>
                </table>
            </div>
                        </Content>
                    </Content>
                </Layout>
                </Layout>
        )
    }
}
