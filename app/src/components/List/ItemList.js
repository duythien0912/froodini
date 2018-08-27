import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



const titleFormatter = (cell, row) => `<a href=${row.watchHref} target="_blank">${cell}</a>`;



class ItemList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }



    render() {


        return (
            <BootstrapTable data={this.props.courses}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField="title"
                    dataFormat={titleFormatter} 
                    dataSort
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Title
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="length"
                    dataSort
                    caretRender={getCaret}
                    columnTitle
                >
                    Length
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="category"
                    dataSort
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Category
                </TableHeaderColumn>  

                <TableHeaderColumn 
                    dataField="authorId"
                    dataSort
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Author
                </TableHeaderColumn>                                
            </BootstrapTable>
        );
    }

}




ItemList.propTypes = {
    courses: []
};




export default ItemList;
