import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'
import {Button, Layout} from 'antd';
import {Link} from "react-router-dom";

const { Header, Content} = Layout;

export class SuccessRegPage extends React.Component {
    render()
    {
        return (
            <Layout>
                <Header>
                    <Roof/>
                </Header>
                <Layout>
                    <Content className="site-layout-background">
                        <Content>
                            <h1 style={{marginLeft:"25%",color:"white"}}>Registration completed! Please, now login</h1>
                      <Link to={{pathname: '/login' }} >
                            <Button style={{marginLeft: "50%"}}>
                                Login
                                </Button>
                          </Link>
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
