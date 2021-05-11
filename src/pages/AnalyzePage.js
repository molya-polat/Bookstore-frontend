import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {AnalyzeForm} from '../components/AnalyzeForm'
import {Layout} from 'antd';
import {SideBar} from "../components/SideBar";

const { Header, Content, Sider} = Layout;

export class AnalyzePage extends React.Component {

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
                        <AnalyzeForm/>
                    </Content>
                </Content>
            </Layout>
        </Layout>
    )
    }
}
