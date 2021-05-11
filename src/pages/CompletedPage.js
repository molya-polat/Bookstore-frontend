import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {SideBar} from "../components/SideBar";

import {Layout} from 'antd';



const { Header, Content, Sider} = Layout;

export class CompletedPage extends React.Component {

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
                            <h1 style={{marginLeft:"20%",color:"white"}}>Transaction completed! Thank you for your order!</h1>
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
