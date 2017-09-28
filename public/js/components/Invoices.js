import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container table-responsive">
                <table className="table table-hover">

                    <thead>
                    <tr className="heading">
                        <th>Создан</th>
                        <th>Срок действия</th>
                        <th>E-mail получателя</th>
                        <th>Статус</th>
                        <th>Сумма</th>
                        <th>Назначение</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td> 2017.09.27 14:59:14</td>
                        <td> 2017.10.01 14:58:00</td>
                        <td> yvtugyuvfc@mail.ru</td>
                        <td>
                            <span>Активный</span>
                        </td>
                        <td>
                            88.00 <sup>USD</sup>
                        </td>
                        <td>gfvyuh98uhygvuh89iuh</td>
                    </tr>

                    <tr>
                        <td> 2017.09.25 13:50:48</td>
                        <td> 2017.09.29 13:12:00</td>
                        <td> natali888tw@mail.ru</td>
                        <td>
                            <span>Активный</span>
                        </td>
                        <td> 500.00 <sup>USD</sup>
                        </td>
                        <td>Оплата юбки и свитера</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default App;