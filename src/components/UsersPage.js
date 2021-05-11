import React from 'react';
import '../css/table.css'
import axios from 'axios';
import { Button} from 'antd';
import {Link} from "react-router-dom";



// function onChange(e) {
//      // let userId = e.userId;
//     axios.get(`http://localhost:8080/changeState?userId=`+e)
//         .then(res => {
//             const users= res.data;
//             this.setState({users: users});
//         })
//
// }
export  class UsersPage extends React.Component {
    state = {
        users: [],
        headers: ["UserID", "Username", "Address","Email", "Role","State"],
    };

    componentDidMount() {
        axios.get(`http://localhost:8080/getUsers`)
            .then(res => {
                const users = res.data;
                this.setState({users: users});
            })
    }

    render() {
        const list = this.state.users.map((invoice, index) => {
            return (
                <tr key={index}>
                    <td>{invoice.userId}</td>
                    <td>{invoice.username}</td>
                    <td>{invoice.address}</td>
                    <td>{invoice.email}</td>
                    <td>{invoice.type}</td>
                    <td>
                        <Link to={{pathname: '/changeState', search: '?userId=' + invoice.userId  }} >
                        <Button >change</Button>
                        </Link>
                    </td>
                </tr>
            )
        });
        return (
            <div id="Table">
                <h1 className="content" style={{marginLeft:"40%",color:"white"}}>All Users</h1>
                <table>
                    <thead>
                    <tr>
                        {this.state.headers.map(function (title, idx) {
                            return <th key={idx}>{title}</th>;
                        }, this)
                        }</tr>
                    </thead>
                    <tbody>
                    {list}
                    </tbody>
                </table>
            </div>
        )
    }
}
