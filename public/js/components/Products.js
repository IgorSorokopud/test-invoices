import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'moment';

class Products extends Component {
    render() {
        return (
            <div className="container table-responsive">
                <table className="table table-hover table-bordered">

                    <thead>
                    <tr role="row" className="heading">
                        <th>Number</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Created date</th>
                        <th>Updated date</th>
                    </tr>
                    </thead>

                    {this.props.Store.products.map(function (product, index) {

                        return (
                            <tbody key={index}>
                            <tr>
                                <td> {index + 1}</td>
                                <td> {product.name}</td>
                                <td> {product.price}</td>
                                <td>{Moment(product.createdAt).format('YYYY-MM-DD HH:mm')}</td>
                                <td>{Moment(product.updatedAt).format('YYYY-MM-DD HH:mm')}</td>
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
)(Products);