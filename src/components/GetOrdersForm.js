import React from 'react';
import '../css/table.css'
import axios from 'axios';
import { Link } from "react-router-dom";
import {getUser} from "../utils/storageUtils";

export  class GetOrdersForm extends React.Component {
    state = {
        orders: []
    };

    componentDidMount() {
        let username = getUser().username;
        axios.get(`http://localhost:8080/getOrders`,{
            params: {
                username: username
        }})
            .then(res => {
                const orders = res.data;
                this.setState({orders: orders });
            })
    }

    render() {
        const list = this.state.orders.map((invoice, index) => {
            return (
                <tr key={index}>
                    <Link to={{pathname: '/orderDetails', search: '?id=' + invoice.order_id}} >
                        <td >{invoice.order_id}</td>
                    </Link>
                    <td>{'¥'+invoice.totalPrice}</td>
                    <td> {(invoice.isPaid)?"paid":"not paid"}</td>
                    <td>{invoice.bdate}</td>
                    {/*<td>{invoice.isPaid}</td>*/}
                </tr>
            )
        });
        return (
            <div id="Table">
                <h1 style={{marginLeft:"40%",color:"white"}}>My orders</h1>
                <table>
                  <th>OrderId</th>
                    <th>Total price</th>
                    <th>State</th>
                    <th>Date</th>
                    <tbody>
                    {list}
                    </tbody>
                </table>
            </div>
        )
    }
}
