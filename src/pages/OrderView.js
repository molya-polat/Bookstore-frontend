import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {SideBar} from "../components/SideBar";
import { getUser } from '../utils/storageUtils'

import {Layout} from 'antd';
import axios from "axios";
import {history} from "../utils/historyUtils";


const { Header, Content, Sider} = Layout;

export class OrderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cartInfo: []}
    };

    componentDidMount()
    {
        let username = getUser().username;
        axios.get("http://localhost:8080/buyBooks", {
            params: {
                username: username
            }
        })
            .then(response => {
                if(response.data.status===0){
                    history.push('./error');
                }
                else if(response.data.status===1)
                    this.setState({cartInfo:[]})
                history.push('./completed');
            })
    }
    render()
    {

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

                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
