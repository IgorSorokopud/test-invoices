import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddInvoices extends Component {

    constructor(props) {
        super(props);
        this.state = {product: ['1']};
    }

    ClickHendle(e) {
        var self = this;

        this.props.Store.products.map(function (el) {
            if(el.id === +e.target.value) {
                self.setState({product: self.state.product.concat(e.target.value)});
                var newInv = [{
                    product: self.state.product.concat(e.target.value)
                }];
                self.props.onAddInvoice(newInv);
            }
        });
    }

    render() {
        console.log('test store', this.props.Store);
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

                <select onChange={this.ClickHendle.bind(this)}>
                    {this.props.Store.products.map(function (product, index) {
                        return (
                            <option key={index} value={product.id}>{product.name}</option>
                        );
                    })}
                </select>
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
            dispatch({ type: 'ADD_INVOICE', payload: arr })
        }
    })
)(AddInvoices);