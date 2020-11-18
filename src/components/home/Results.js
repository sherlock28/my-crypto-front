import React, { Component } from 'react';

export default class Results extends Component {
    render() {

        const { totalBuy, totalSell } = this.props.data;
        const { amount, exchangebuy, exchangesell } = this.props.vars;

        var amount_coins = amount / totalBuy;
        var profit = totalSell * amount_coins;
        var netprofit = profit - amount;
        var percentage = (netprofit * 100) / profit;

        return(
            <div className="alert alert-primary mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <p><strong>Results:</strong></p>
                        <ul id="results">
                            <li><p>Amount entered: $ {parseFloat(amount).toFixed(2)}</p></li>
                            <li><p>Profit: $ {profit.toFixed(2)}</p></li>
                            <li><p>Net profit: $ {netprofit.toFixed(2)}</p></li>
                            <li><p>Percentage obtained: {percentage.toFixed(2)} %</p></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p><strong>Market rates:</strong></p>
                        <ul id="market-rates">
                            <li><p className="text-capitalize"><strong>{exchangebuy}:</strong></p></li>
                            <ul>
                                <li><p>Total buy: $ {parseFloat(totalBuy).toFixed(2)}</p></li>
                            </ul>
                            <li><p className="text-capitalize"><strong>{exchangesell}:</strong></p></li>
                            <ul>
                                <li><p>Total sell: $ {parseFloat(totalSell).toFixed(2)}</p></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}