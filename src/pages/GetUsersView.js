import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {SideBarAdmin} from "../components/SideBarAdmin";
import { UsersPage } from "../components/UsersPage";

import { Layout} from 'antd';

const { Header, Content, Sider} = Layout;

export class GetUsersView extends React.Component {

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
                           <UsersPage />
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
