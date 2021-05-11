import React from 'react';
import '../css/style.css';
import '../css/table.css';
import { Roof } from '../components/Roof'

import {Layout} from 'antd';



const { Header, Content} = Layout;

export class DisabledUserView extends React.Component {

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
                            <h1 style={{marginLeft:"25%",color:"white"}}>We are sorry, but you disabled by admin:(</h1>
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
