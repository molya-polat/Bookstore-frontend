import React from 'react'
// import '../css/menu.css'
import {Form, Menu} from 'antd';
import {
    ShoppingCartOutlined,
    ReadOutlined,
    ContainerOutlined,
    IdcardOutlined,
} from '@ant-design/icons';
import { Link} from "react-router-dom";


export class SideBar extends React.Component {

    render() {

        // const path = this.props.location.pathname;
        // console.log(path);
        return (
            <div className="menu">
                <Menu  className="menu__link"
                >
                    <Menu.Item key="/home"><ReadOutlined />
                        <Link to='/home' className="menu__link">Books</Link>
                    </Menu.Item>
                    <Menu.Item key="/myCart"><ShoppingCartOutlined   />
                        <Link to='/myCart' className="menu__link">MyCart</Link>
                    </Menu.Item>
                    <Menu.Item key="/orders"><ContainerOutlined  />
                        <Link to='/getOrders' className="menu__link">MyOrders</Link>
                    </Menu.Item>
                    <Menu.Item key="/analysis"><ContainerOutlined  />
                        <Link to='/analysis' className="menu__link">Analyze</Link>
                    </Menu.Item>
                    <Menu.Item key="/admin" ><IdcardOutlined />
                        <Link to='/login' className="menu__link">Logout</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
