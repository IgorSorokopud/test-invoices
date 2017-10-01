import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

class Customers extends Component {
    render() {
        return (
            <div className="container table-responsive">
                <table className="table table-hover table-bordered">

                    <thead>
                    <tr role="row" className="heading">
                        <th>Number</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Created date</th>
                        <th>Updated date</th>
                    </tr>
                    </thead>

                    {this.props.Store.customers.map(function (customer, index) {

                        return (
                            <tbody key={index}>
                            <tr>
                                <td> {index + 1}</td>
                                <td> {customer.name}</td>
                                <td> {customer.address}</td>
                                <td> {customer.phone}</td>
                                <td>{Moment(customer.createdAt).format('YYYY-MM-DD HH:mm')}</td>
                                <td>{Moment(customer.updatedAt).format('YYYY-MM-DD HH:mm')}</td>
                            </tr>
                            </tbody>
                        );
                    })}
                </table>
            </div>
        );
    }
}
export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({})
)(Customers);