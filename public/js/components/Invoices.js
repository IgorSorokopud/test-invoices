import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container table-responsive">
                <table className="table table-hover">

                    <thead>
                    <tr role="row" className="heading">
                        <th>Создан</th>
                        <th>Срок действия</th>
                        <th>E-mail получателя</th>
                        <th>Статус</th>
                        <th>Сумма</th>
                        <th colSpan="2">Назначение</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr data-href="#/invoices/view/33732">
                        <td data-title="Создан"> 2017.09.27 14:59:14</td>
                        <td data-title="Срок действия"> 2017.10.01 14:58:00</td>
                        <td data-title="E-mail получателя"> yvtugyuvfc@mail.ru</td>
                        <td data-title="Статус">
                            <span>Активный</span>
                        </td>
                        <td data-title="Сумма">
                            88.00 <sup>USD</sup>
                        </td>
                        <td data-title="Назначение" colSpan="2">gfvyuh98uhygvuh89iuh</td>
                    </tr>

                    <tr data-href="#/invoices/view/33368">
                        <td data-title="Создан"> 2017.09.25 13:50:48</td>
                        <td data-title="Срок действия"> 2017.09.29 13:12:00</td>
                        <td data-title="E-mail получателя"> natali888tw@mail.ru</td>
                        <td data-title="Статус">
                            <span>Активный</span>
                        </td>
                        <td data-title="Сумма"> 500.00 <sup>USD</sup>
                        </td>
                        <td data-title="Назначение" colSpan="2">Оплата юбки и свитера</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default App;