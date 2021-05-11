import React from 'react';
import '../css/table.css'
import axios from 'axios';
import { Link } from "react-router-dom";

export  class BookTable extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            headers: ["Title", "Author", "Language", "Published", "Sales","Stock", "ISBN"],
            sortby: null,
            descending: false,
            edit: null,
            search: false,
            initialSearch: [],
            books: [],
        };
    }
//
    componentDidMount() {
        axios.get(`http://localhost:8080/getBooks`)
            .then(res => {
                  const books = res.data;
                this.setState({books: books});
            })
    }
    search = (e) => {
        let needle = e.target.value.toLowerCase();
        if (!needle) {
            this.setState({data: this.state.initialSearch});
            return;
        }
        let idx = (e.target.dataset.idx);
        let searchdata = this.state.initialSearch.filter(function (row){
            return row[idx].toString().toLowerCase().indexOf(needle) > -1;
        });
        this.setState({data: searchdata});
    };
    editor = (e) => {
        this.setState( {
            edit: {
                row: parseInt(e.target.dataset.row, 20),
                cell: e.target.cellIndex,
            }
        });
    };
    save = (e) => {
        e.preventDefault();
        let input = e.target.firstChild;
        let data = this.state.data.slice();
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({
            edit:null,
            books: data,
        });
    } ;
    renderSearch = () =>  {
        if (!this.state.search) {
            return null;
        }
        return (
            <tr onChange={this.search}>
                {this.state.headers.map(function (ignore, idx) {
                    return <td key={idx}><input type="text" data-idx={idx}/></td>;
                })}
            </tr>
        );
    };
    toggleSearch = () => {
        if (this.state.search) {
            this.setState({
                data: this.props.state.initialSearch,
                search: false,
            });
            this.props.state.initialSearch = null;
        } else {
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.initialSearch = this.props.data;
            this.setState({
                search: true,
            });
        }
    };
    render() {
        const list = this.state.books.map((invoice, index) => {
            return (
                <tr key={index} onSubmit={this.save}>
                    <Link to={{pathname: '/details', search: '?id=' + invoice.id}} >
                        <td >{invoice.title}</td>
                    </Link>
                    <td>{invoice.author}</td>
                    <td>{invoice.language}</td>
                    <td>{invoice.published}</td>
                    <td>{invoice.sales}</td>
                    <td>{invoice.stock}</td>
                    <td>{'№' + invoice.isbn}</td>
                </tr>
            )
        });
        return (
            <div id="Table">
                <table>
                    <thead>
                    <tr>
                        {this.state.headers.map(function (title, idx) {
                            return <th key={idx} onClick={this.toggleSearch}>{title}</th>;
                        }, this)
                        }</tr>
                    </thead>
                    <tbody onDoubleClick={this.editor}>
                    {this.renderSearch()}
                    {list}
                    </tbody>
                </table>
            </div>
        )
    }

}
