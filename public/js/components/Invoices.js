import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddInvoces from './AddInvoices';

class Invoices extends Component {
    render() {
        var self = this;
        return (
            <div>
                <AddInvoces />
                <div className="container table-responsive">
                    <table className="table table-hover">

                        <thead>
                        <tr role="row" className="heading">
                            <th>Number</th>
                            <th>Customer</th>
                            <th>Discount</th>
                            <th>Total</th>
                            <th>Created date</th>
                            <th>Updated date</th>
                        </tr>
                        </thead>

                        {this.props.Store.invoices.map(function (invoices, index) {

                            return (
                                <tbody key={index}>
                                <tr>
                                    <td> {index + 1}</td>
                                    <td> {self.props.Store.customers[invoices.customer_id]
                                        ? self.props.Store.customers[invoices.customer_id].name : []
                                    }</td>
                                    <td> {invoices.discount}</td>
                                    <td> {invoices.total}</td>
                                    <td>{invoices.createdAt}</td>
                                    <td>{invoices.updatedAt}</td>
                                </tr>
                                </tbody>
                            );
                        })}
                    </table>
                </div>
            </div>
        );
    }
}
export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({})
)(Invoices);