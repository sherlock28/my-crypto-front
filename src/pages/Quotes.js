import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

export default class Quotes extends Component {

    constructor() {
        super();
        this.state = {
            marketRates: {},
            loading: true
        };
    }
    
    async componentDidMount() {
        await fetch(`${process.env.REACT_APP_API}/quotes`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
              .then(response => response.json())
              .then(data => { 
                this.setState({marketRates: data, loading: false});
              })
              .catch();
    }

    render() {
        return (
            <div>
                <h1 className="text-center text-white">Market rates</h1>
                <div className="row">
                    <div className="col-xl-5">
                        <hr/>
                        <h4 className="text-white">DAI</h4>
                        <table className="table table-responsive-lg text-white">
                            <thead className="thead-dark">
                                <tr>
                                    <th></th>
                                    <th>Buy</th>
                                    <th>Total buy</th>
                                    <th>Sell</th>
                                    <th>Total sell</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.loading ? <Spinner 
                                                        animation="border" 
                                                        variant="primary" 
                                                        size="sm"
                                                        />
                                    : this.state.marketRates.dai === undefined ? 
                                        <tr></tr> 
                                        : this.state.marketRates.dai.map((data, i) => {
                                            return (<tr key={i}>
                                                        <td className="text-white">{data.exchange}</td>
                                                        <td className="text-white">{data.buy}</td>
                                                        <td className="text-white">{data.totalbuy}</td>
                                                        <td className="text-white">{data.sell}</td>
                                                        <td className="text-white">{data.totalsell}</td>
                                                    </tr>);
                                        })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-xl-5">                        
                    <hr/>
                    <h4 className="text-white">Ethereum</h4>
                    <table className="table table-responsive-lg text-white">
                        <thead className="thead-dark">
                            <tr>
                                <th></th>
                                <th>Buy</th>
                                <th>Total buy</th>
                                <th>Sell</th>
                                <th>Total sell</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.loading ? <Spinner 
                                                        animation="border" 
                                                        variant="primary" 
                                                        size="sm"
                                                        />
                                : this.state.marketRates.ethereum === undefined ? 
                                    <tr></tr> 
                                    : this.state.marketRates.ethereum.map((data, i) => {
                                        return (<tr key={i}>
                                                    <td className="text-white">{data.exchange}</td>
                                                    <td className="text-white">{data.buy}</td>
                                                    <td className="text-white">{data.totalbuy}</td>
                                                    <td className="text-white">{data.sell}</td>
                                                    <td className="text-white">{data.totalsell}</td>
                                                </tr>);
                                    })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5">
                        <hr/>
                        <h4 className="text-white">Bitcoin</h4>
                        <table className="table table-responsive-lg text-white">
                            <thead className="thead-dark">
                                <tr>
                                    <th></th>
                                    <th>Buy</th>
                                    <th>Total buy</th>
                                    <th>Sell</th>
                                    <th>Total sell</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.loading ? <Spinner 
                                                        animation="border" 
                                                        variant="primary" 
                                                        size="sm"
                                                        />
                                :this.state.marketRates.bitcoin === undefined ? 
                                    <tr></tr> 
                                    : this.state.marketRates.bitcoin.map((data, i) => {
                                        return (<tr key={i}>
                                                    <td className="text-white">{data.exchange}</td>
                                                    <td className="text-white">{data.buy}</td>
                                                    <td className="text-white">{data.totalbuy}</td>
                                                    <td className="text-white">{data.sell}</td>
                                                    <td className="text-white">{data.totalsell}</td>
                                                </tr>);
                                    })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}