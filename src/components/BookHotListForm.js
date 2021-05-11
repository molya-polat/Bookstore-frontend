import React from 'react';
import '../css/table.css'
import axios from 'axios';


export  class BookHotListForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {
        books: [],
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
    bookHotList=()=> {
     let d1 = this.state.date1;
    let d2 = this.state.date2;
    console.log(d1);
        console.log(d2);
        axios.get(`http://localhost:8080/bookHotList`,{
            params:{
                date1: d1,
                date2: d2
            }
            })
            .then(res => {
                const books = res.data;
                this.setState({books: books });
            })
    }

    render() {

        const list = this.state.books.map((invoice, index) => {
            return (
                <tr key={index}>
                    <td>{invoice.title}</td>
                    <td>{invoice.temp}</td>
                    {/*<td>{invoice.isPaid}</td>*/}
                </tr>
            )
        });

        return (
            <div id="Table">
                <h1 style={{marginLeft:"40%",color:"white", font: "30px"}}>Book Hot List</h1>
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
                <button style={{marginLeft:"220px"}} onClick={this.bookHotList}>Search</button>
                <table>
                    <th>Book</th>
                    <th>Sales</th>
                    <tbody>
                    {list}
                    </tbody>
                </table>
            </div>
        )
    }
}
