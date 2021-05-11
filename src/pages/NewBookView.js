import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {SideBar} from "../components/SideBar";
import {Layout} from 'antd';
import  NewBookForm  from '../components/NewBookForm'

const { Header, Content, Sider} = Layout;

export class NewBookView extends React.Component {
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
                            <NewBookForm/>
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
