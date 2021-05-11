import React from 'react';
import '../css/table.css'
import axios from 'axios';
import { Link } from "react-router-dom";

export  class GetAllOrdersForm extends React.Component {
    state = {
        orders: []
    };
    componentDidMount() {
        axios.get(`http://localhost:8080/getAllOrders`)
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
                    <td>{invoice.userId}</td>
                    <td>{'¥'+invoice.totalPrice}</td>
                    <td> {(invoice.isPaid)?"paid":"not paid"}</td>
                    <td>{invoice.bdate}</td>
                </tr>
            )
        });
        return (
            <div id="Table">
                <h1 style={{marginLeft:"40%",color:"white"}}>All Orders</h1>
                <table>
                    <th>OrderId</th>
                    <th>UserId</th>
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
