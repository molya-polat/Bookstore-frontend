import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {SideBar} from "../components/SideBar";


import {Layout} from 'antd';



const { Header, Content, Sider} = Layout;

export class ErrorPage extends React.Component {

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
                            <h1 style={{marginLeft:"40%",color:"white"}}>Sorry! Something went wrong :(</h1>
                            <h1 style={{marginLeft:"40%",color:"white"}}>Please, open your Cart and try again</h1>
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
