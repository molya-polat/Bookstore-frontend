import React from 'react';
import '../css/table.css'
import axios from 'axios';
import {getUser} from "../utils/storageUtils";


export  class AnalyzeForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            user: [],
            books_info:[],
            date1: null,
            date2: null}
    };
    handleInputChange1 = (e) =>{
        this.setState({
            date1 : e.target.value
        })
    };
    handleInputChange2 = (e) =>{
        this.setState({
            date2: e.target.value
        })
    };
    search=()=> {
        let username = getUser().username;
        let d1 = this.state.date1;
        let d2 = this.state.date2;
        axios.get(`http://localhost:8080/search`,{
            params:{
                username: username,
                date1: d1,
                date2: d2
            }
        })
            .then(res => {
                const books = res.data;
                this.setState({ books_info: books });
            })
    };
    analyze=()=> {
        let username = getUser().username;
        let d1 = this.state.date1;
        let d2 = this.state.date2;
        axios.get(`http://localhost:8080/analyze`,{
            params:{
                username: username,
                date1: d1,
                date2: d2
            }
        })
            .then(res => {
                const u = res.data;
                this.setState({ user: u});
            })
    };

    render() {
        const information = this.state.user.map((info, index)=> {
            return (
                <tbody>
                <td>{info.purchases}</td>
                <td>{info.quantity}</td>
                </tbody>
            )
        });

        const list = this.state.books_info.map((invoice, index) => {
            return (
                <tr key={index}>
                    <td>{invoice.title}</td>
                    <td>{invoice.temp}</td>
                </tr>
            )
        });

        return (
            <div id="Table">
                <h1 style={{marginLeft:"40%",color:"white", font: "30px"}}>Your consumption analysis</h1>
                <div>
                    <div style={{float: "left"}}>
                        <label htmlFor="start" style={{display: "block",  font: " sans-serif", marginLeft: "220px", color: "white"}}>Start date:</label>
                        <input  name="start_date"  type="text" onChange={ this.handleInputChange1} style = {{marginLeft:"220px"}}/>
                    </div>
                    <div>
                        <label htmlFor="start" style={{display: "block",  font: " sans-serif", marginLeft: "800px", color: "white", float:"top"}}>End date:</label>
                        <input  name="end_date"  type="text" onChange={ this.handleInputChange2} style = {{marginLeft:"800px", float:"top"}}/>
                    </div>
                </div>
                <button style={{marginLeft:"220px"}} onClick={this.search}>Search</button>

                <table>
                    <th>Book</th>
                    <th>Quantity</th>
                    <tbody>
                    {list}
                    </tbody>
                </table>
                <div>
                    <table>
                        <th>Total purchases</th>
                        <th>Total books quantity</th>
                        {information}
                </table>
                    <button style={{marginLeft:"220px"}} onClick={this.analyze}>Analyze</button>
                </div>
            </div>
        )
    }
}
