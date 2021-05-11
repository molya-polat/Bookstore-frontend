import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {SideBar} from "../components/SideBar";
import {GetOrdersForm} from '../components/GetOrdersForm'

import {Layout} from 'antd';

const { Header, Content, Sider} = Layout;

export class GetOrdersPage extends React.Component {

    render()
    {        return (
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
                            <GetOrdersForm/>
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
