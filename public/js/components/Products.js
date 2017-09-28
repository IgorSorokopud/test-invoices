import React, { Component } from 'react';
import { connect } from 'react-redux';


class Products extends Component {
    render() {

        console.log('test store ??', this.props.testStore);
        return (
            <div className="container table-responsive">
                <table className="table table-hover">

                    <thead>
                    <tr role="row" className="heading">
                        <th>Number</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Created date</th>
                        <th>Updated date</th>
                    </tr>
                    </thead>

                    {this.props.testStore.products.map(function (product, index) {

                        return (
                            <tbody key={index}>
                            <tr>
                                <td> {index + 1}</td>
                                <td> {product.name}</td>
                                <td> {product.price}</td>
                                <td>{product.createdAt}</td>
                                <td>{product.updatedAt}</td>
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
        testStore: state
    }),
    dispatch => ({})
)(Products);