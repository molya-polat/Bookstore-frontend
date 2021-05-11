import React from 'react';
import '../css/menu.css'
import { Roof } from '../components/Roof'
import {SideBarAdmin} from '../components/SideBarAdmin'
import {BookTable} from '../components/BookTable'
import { Layout } from 'antd'
import '../css/style.css';
const { Header, Content, Sider} = Layout;

export class HomeAdminView extends React.Component {
    render() {
        return(
            <Layout>
                <Header>
                    <Roof/>
                </Header>
                <Layout>
                    <Sider>
                        <SideBarAdmin/>
                    </Sider>
                    <Content className="site-layout-background">
                        <Content >
                            <BookTable />
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
