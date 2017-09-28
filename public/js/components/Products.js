import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container table-responsive">
                <table className="table table-hover">

                    <thead>
                    <tr role="row" className="heading">
                        <th>Name</th>
                        <th>Price</th>
                        <th>Created date</th>
                        <th>Updated date</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td> Parachute Pants</td>
                        <td> 29.99</td>
                        <td>2017-09-28T09:07:59.443</td>
                        <td>2017-09-28T09:07:59.443Z</td>
                    </tr>

                    <tr>
                        <td> Phone Holder</td>
                        <td> 150</td>
                        <td>2017-09-28T09:07:59.443</td>
                        <td>2017-09-28T09:07:59.443Z</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default App;