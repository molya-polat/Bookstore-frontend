import React from 'react';
import '../css/table.css'
import axios from 'axios';


export  class ConsumptionListForm extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            info: [],
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
    consumptionList=()=> {
        let d1 = this.state.date1;
        let d2 = this.state.date2;
        console.log(d1);
        console.log(d2);
        axios.get(`http://localhost:8080/consumptionList`,{
            params:{
                date1: d1,
                date2: d2
            }
        })
            .then(res => {
                const info1 = res.data;
                this.setState({info: info1 });
            })
    }

    render() {

        const list = this.state.info.map((invoice, index) => {
            return (
                <tr key={index}>
                    <td>{invoice.username}</td>
                    <td>{invoice.purchases}</td>
                    <td>{invoice.quantity}</td>
                    {/*<td>{invoice.isPaid}</td>*/}
                </tr>
            )
        });

        return (
            <div id="Table">
                <h1 style={{marginLeft:"40%",color:"white", font: "30px"}}>Consumption List</h1>
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
                <button style={{marginLeft:"220px"}} onClick={this.consumptionList}>Search</button>
                <table>
                    <th>Username</th>
                    <th>Purchases</th>
                    <th>Books' quantity</th>
                    <tbody>
                    {list}
                    </tbody>
                </table>
            </div>
        )
    }
}
