import React, { Component } from 'react'

import BootstrapTable from 'react-bootstrap-table-next';

import axios from 'axios';

import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export class AdminDashboard extends Component {

    state = {

        employee: [],
        value: '',
        filterdata:[],
        columns: [{

            dataField: 'id',

            text: 'Id',
            sort: true
        }, {

            dataField: 'title',

            text: 'Title',

            sort: true,

        },



        {

            dataField: 'body',

            text: 'Body',

            sort: true

        },

        ]

    }

    componentDidMount() {

        axios.get(`https://jsonplaceholder.typicode.com/posts`).then(response => {

            console.log(response.data);

            this.setState({

                employee: response.data

            });
            this.setState({

                filterdata: response.data

            });

        });

    }
    handleChange(e) {
        debugger
        console.log('handle change called')
        if(e.target.value !=='' || e.target.value !== undefined || e.target.value !==null){

            const data= this.state.filterdata.filter((x)=>
            {
            return     x.title.includes(e.target.value) ||  x.body.includes(e.target.value)
            })
            this.setState({
                value:e.target.value
            })
            this.setState({
    
                employee: data
    
            });
        }else{
            this.setState({
                value:''
            })
            this.setState({
    
                employee: this.state.filterdata   
    
            }); 
        }
      
    }
    render() {
        const options = {

            page: 0,

            sizePerPageList: [{

                text: '5', value: 5

            }, {

                text: '10', value: 10

            }, {

                text: 'All', value: this.state.employee.length

            }],

            sizePerPage: 5,

            pageStartIndex: 0,

            paginationSize: 3,

            prePage: 'Prev',

            nextPage: 'Next',

            firstPage: 'First',

            lastPage: 'Last',

            paginationPosition: 'top'

        };

        return (

            <div className="container">

                <div  className="row hdr">

                    <div className="col-sm-12 btn btn-info">

                        React Bootstrap Table with Searching and Custom Pagination

                         </div>

                </div>
                <div className="row hdr" style={{ marginTop: 20 }}>

                    <div className="col-sm-4">

                        <input type="text" name="search" value={this.state.value} onChange={(e) => { this.handleChange(e) }} className="form-control" placeholder="Enter Title || Body to search" />

                    </div>
                    <div className="col-sm-8">



                    </div>
                </div>

                <div style={{ marginTop: 20 }}>

                    <BootstrapTable

                        striped

                        hover

                        keyField='id'

                        data={this.state.employee}

                        columns={this.state.columns}
                        filter={filterFactory()}
                        pagination={paginationFactory(options)} />

                </div>

            </div>

        )

    }

}



export default AdminDashboard