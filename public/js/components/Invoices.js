import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddInvoces from './AddInvoices';
import Moment from 'moment';

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

                        <tbody>
                        {this.props.Store.invoices.map(function (invoice, index) {
                            return (
                                <tr key={index}>
                                    <td> {index + 1}</td>
                                    <td> {self.props.Store.customers.map(function (customers, i) {
                                        if (+customers.id === +invoice.customer_id) {
                                            return customers.name;
                                        }
                                    })}
                                    </td>
                                    <td> {invoice.discount}</td>
                                    <td> {invoice.total}</td>
                                    <td>{Moment(invoice.createdAt).format('YYYY-MM-DD HH:mm')}</td>
                                    <td>{Moment(invoice.updatedAt).format('YYYY-MM-DD HH:mm')}</td>
                                </tr>
                            );
                        })}
                        </tbody>
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