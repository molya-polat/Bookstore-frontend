import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {BookHotListForm} from '../components/BookHotListForm'

import {Layout} from 'antd';
import {SideBarAdmin} from "../components/SideBarAdmin";

const { Header, Content, Sider} = Layout;

export class BookHotListPage extends React.Component {

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
                        <BookHotListForm/>
                    </Content>
                </Content>
            </Layout>
        </Layout>
    )
    }
}
