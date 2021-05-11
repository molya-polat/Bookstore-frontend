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


export class SideBarAdmin extends React.Component {

    render() {

        return (
            <div className="menu">
                <Menu  className="menu__link"
                >
                    <Menu.Item key="/home"><ReadOutlined />
                        <Link to='/homeAdmin' className="menu__link">Books</Link>
                    </Menu.Item>
                    <Menu.Item key="/allUsers"><ShoppingCartOutlined   />
                        <Link to='/allUsers' className="menu__link">All Users</Link>
                    </Menu.Item>
                    <Menu.Item key="/getAllOrders"><ContainerOutlined  />
                        <Link to='/getAllOrders' className="menu__link">All Orders</Link>
                    </Menu.Item>
                    <Menu.Item key="/addNewBook"><ContainerOutlined  />
                        <Link to='/addNewBook' className="menu__link">Add Book</Link>
                    </Menu.Item>
                    <Menu.Item key="/bookHotList"><ContainerOutlined  />
                        <Link to='/bookHotList' className="menu__link">Hot List</Link>
                    </Menu.Item>
                    <Menu.Item key="/consumptionList"><ContainerOutlined  />
                        <Link to='/consumptionList' className="menu__link">Consumers</Link>
                    </Menu.Item>
                       <Menu.Item key="/login" ><IdcardOutlined />
                        <Link to='/login' className="menu__link">Logout</Link>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
