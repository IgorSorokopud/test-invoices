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
            total: 0,
            result: 0
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

        this.calculateDiscount(e.target.value);
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
                    }]),

                    total: self.state.total += +el.price
                });
            }
        });

        self.calculateDiscount();
    }

    calculateDiscount(discount) {
        var discount = discount ? discount : this.state.discount;
        var total = this.state.total;
        var result = total - (total / 100 * discount).toFixed(2);

        this.setState({result: result});
    }

    create() {
        var self = this;

        axios.post('/api/invoices', {
            "customer_id": self.state.customerId,
            "discount": self.state.discount,
            "total": self.state.result
        }).then(function (response) {
            self.state.products.forEach(function (product) {
                axios.post('/api/invoices/' + +response.data.id + '/items', {
                    "product_id": product.id,
                    "quantity": product.quantity
                })
            });

            self.resetForm();
        });

        self.props.onAddInvoice([{
            "customer_id": self.state.customerId,
            "discount": self.state.discount,
            "total": self.state.result
        }]);
    }

    resetForm() {
        var customer = document.getElementById('customer');
        customer.options[0].selected = "selected";

        var products = document.getElementById('products');
        products.options[0].selected = "selected";

        document.getElementById('discount').value = '';

        this.setState({
            products: [],
            discount: 0,
            result: 0,
            total: 0
        })
    }

    render() {
        var total = 0;

        return (
            <div className="well container">
                <table className="table table-hover table-grid">
                    <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Products</th>
                        <th>Discount</th>
                        <th>Sum</th>
                        <th>Total: {this.props.Store.invoices.map(function (invoice) {
                                total = total + invoice.total;
                            })}

                            {total.toFixed(2)} $
                        </th>
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
                                    <select onChange={this.handleProductsChange.bind(this)} id="products">
                                        <option defaultValue="selected">Product</option>
                                        {this.props.Store.products.map(function (product, index) {
                                            return (
                                                <option key={index} value={product.id}>{product.name}</option>
                                            );
                                        })}
                                    </select>

                                    <div className="pre-scrollable">
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
                            </div>
                        </td>
                        <td>
                            <input onKeyUp={this.handleDiscountChange.bind(this)} id="discount" type="number"/>
                        </td>
                        <td>
                            <span>{this.state.result.toFixed(2)} $</span>
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