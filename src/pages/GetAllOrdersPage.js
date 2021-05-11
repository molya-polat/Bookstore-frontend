import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {GetAllOrdersForm} from '../components/GetAllOrdersForm'

import {Layout} from 'antd';
import {SideBarAdmin} from "../components/SideBarAdmin";

const { Header, Content, Sider} = Layout;

export class GetAllOrdersPage extends React.Component {

    render()
    {        return (
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
                        <GetAllOrdersForm/>
                    </Content>
                </Content>
            </Layout>
        </Layout>
    )
    }
}
