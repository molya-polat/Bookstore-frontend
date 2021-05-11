import React from 'react';
import '../css/style.css';
import '../css/table.css';
 import { Roof } from '../components/Roof'
import {SideBar} from "../components/SideBar";
import { BookDetail } from "../components/BookDetail";

import { Layout } from 'antd'
import axios from "axios";

const { Header, Content, Sider} = Layout;

export class BookDetailsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bookInfo:null};
    }
    componentDidMount() {
        const query = this.props.location.search;
        const arr = query.split('=');
        const bookId = parseInt(arr[1]);
        axios.get("http://localhost:8080/getBook?id="+bookId)
            .then(res => {
                const books = res.data;
                this.setState({bookInfo: books});
            })
    }
    render() {
        return(
            <Layout>
                <Header>
                    <Roof/>
                </Header>
                <Layout>
                    <Sider>
                        <SideBar/>
                    </Sider>
                    <Content className="site-layout-background">
                        <Content >
                            <BookDetail info={this.state.bookInfo}/>
                        </Content>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}