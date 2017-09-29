import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddInvoices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: [],
            name: []
        };
    }

    ClickHendle(e) {
        var self = this;

        this.props.Store.products.map(function (el) {
            if (el.id === +e.target.value) {
                self.setState({product: self.state.product.concat(e.target.value)});
                self.setState({name: self.state.name.concat(el.name)});
                //var newInv = [{
                //    product: self.state.product.concat(e.target.value)
                //}];
                //self.props.onAddInvoice(newInv);
            }
        });
    }

    render() {
        return (
            <div className="well">
                <button type="button" className="btn btn-default">Create</button>

                <select>
                    {this.props.Store.customers.map(function (customer, index) {
                        return (
                            <option key={index} value={customer.id}>{customer.name}</option>
                        );
                    })}
                </select>

                <div className="row">
                    <div className="col-md-2">
                        <select id="products" onChange={this.ClickHendle.bind(this)}>
                            {this.props.Store.products.map(function (product, index) {
                                return (
                                    <option key={index} value={product.id}>{product.name}</option>
                                );
                            })}
                        </select>

                        <ul className="list-group">
                            {this.state.name.map(function (name, i) {
                                return (
                                    <li className="list-group-item" key={i}>{name}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
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