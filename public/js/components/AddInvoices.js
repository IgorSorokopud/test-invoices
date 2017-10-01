import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddInvoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: null,
            invoiceId: null,
            products: [],
            discount: null,
            quantity: null,
            total: 0
        };
    }

    handleCustomerChange(e) {
        this.setState({
            customerId: e.target.value
        });
    }

    handleDiscountChange(e) {
        this.setState({
            discount: e.target.value
        });
    }

    handleProductsChange(e) {
        var self = this;

        this.props.Store.products.map(function (el) {
            if (el.id === +e.target.value) {
                self.setState({
                    products: self.state.products.concat([{
                        id: e.target.value,
                        name: el.name,
                        quantity: 1,
                        price: el.price
                    }])
                });

                self.calculateDiscount(+el.price);
            }
        });
    }

    calculateDiscount(total) {
        //var element = document.getElementById('discount').value;
        var result = (50 / 100) * 100;

        this.setState({total: this.state.total += total});
    }

    create() {
        var self = this;

        axios.post('/api/invoices', {
            "customer_id": self.state.customerId,
            "discount": self.state.discount,
            "total": self.state.total
        }).then(function (response) {

            self.state.products.forEach(function (product) {
                axios.post('/api/invoices/' + +response.data.id + '/items', {
                    "product_id": product.id,
                    "quantity": product.quantity
                })
            });
        });
    }

    render() {
        return (
            <div className="well">
                <table className="table table-hover table-grid">
                    <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Products</th>
                        <th>Discount</th>
                        <th>Sum</th>
                    </tr>
                    </thead>
                    <thead>
                    <tr>
                        <td>
                            <div className="row">
                                <div className="col-md-6 col-lg-12">
                                    <select onChange={this.handleCustomerChange.bind(this)} id="customer">
                                        <option defaultValue="selected">Customer</option>
                                        {this.props.Store.customers.map(function (customer, index) {
                                            return (
                                                <option key={index} value={customer.id}>{customer.name}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="row">
                                <div className="col-md-6 col-lg-12">
                                    <select id="products" onChange={this.handleProductsChange.bind(this)}>
                                        <option defaultValue="selected">Product</option>
                                        {this.props.Store.products.map(function (product, index) {
                                            return (
                                                <option key={index} value={product.id}>{product.name}</option>
                                            );
                                        })}
                                    </select>

                                    <ul className="list-group">
                                        {this.state.products.map(function (product, i) {
                                            return (
                                                <li className="list-group-item" key={i}>{product.name}
                                                    <span className="pull-right">{product.price}<sup> $</sup></span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </td>
                        <td>
                            <input onBlur={this.handleDiscountChange.bind(this)} id="discount" type="text"/>
                        </td>
                        <td>
                            <span>{this.state.total.toFixed(2)} $</span>
                        </td>
                        <td>
                            <button onClick={this.create.bind(this)} type="button" className="btn btn-default">Create
                            </button>
                        </td>
                    </tr>
                    </thead>
                </table>
            </div>
        );
    }
}
export default connect(
    state => ({
        Store: state
    }),
    dispatch => ({
        onAddInvoice: (arr) => {
            dispatch({type: 'ADD_INVOICE', payload: arr})
        }
    })
)(AddInvoices);