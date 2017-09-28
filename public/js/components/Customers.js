import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        console.log('test store', this.props.testStore);
        return (
            <div className="container table-responsive">
                <table className="table table-hover">

                    <thead>
                    <tr role="row" className="heading">
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Created date</th>
                        <th>Updated date</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td> Mark Benson</td>
                        <td> 353 Rochester St, Rialto FL 43250</td>
                        <td> 555-534-2342</td>
                        <td>2017-09-28T09:07:59.443</td>
                        <td>2017-09-28T09:07:59.443Z</td>
                    </tr>

                    <tr>
                        <td> Bob Smith</td>
                        <td> 353 Rochester St, Rialto FL 43250</td>
                        <td> 555-534-2342</td>
                        <td>2017-09-28T09:07:59.443</td>
                        <td>2017-09-28T09:07:59.443Z</td>
                    </tr>
                    </tbody>
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
)(App);