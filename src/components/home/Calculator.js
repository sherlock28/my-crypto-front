import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';

export default class Calculator extends Component{

    constructor() {
        super();
        this.state = {
            exchangebuy: '', 
            exchangesell: '',
            coin: '',
            amount: '' 
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.handleLoading(true);
        await fetch(`${process.env.REACT_APP_API}/calculate`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            this.props.handleLoading(false)
            this.props.handleResults(data, this.state);
            this.setState({amount: ''});

            scroll.scrollToBottom({
                duration: 1700,
                delay: 100,
                smooth: true,
                offset: -10,
             });
        })
        .catch(err => console.error(err));
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        return(
            <div className="row justify-content-center">
                <div className="col-auto text-center">
                    <div className="card p-3">
                        <div className="card-body">
                            <h4 className="card-title text-white">Calculator</h4>
                            <hr/>
                            <form onSubmit={this.handleSubmit}>
                                <label htmlFor="coin" className="text-white">Currency</label>
                                <div className="input-group mb-3" >
                                        <select 
                                            value={this.state.coin} 
                                            onChange={this.handleChange} 
                                            name="coin" 
                                            className="custom-select">

                                            <option defaultValue>Choose...</option>
                                            <option value="dai">DAI</option>
                                            <option value="eth">Ethereum</option>
                                            <option value="btc">Bitcoin</option>
                                        </select>
                                </div>
                                <label htmlFor="exchangebuy" className="text-white">Exchange buy</label>
                                <div className="input-group mb-3" >
                                        <select 
                                            value={this.state.exchangebuy} 
                                            onChange={this.handleChange} 
                                            name="exchangebuy" 
                                            className="custom-select">
                                            
                                            <option defaultValue>Choose...</option>
                                            <option value="buenbit">Buenbit</option>
                                            <option value="ripio">Ripio</option>
                                            <option value="qubit">Qubit</option>
                                        </select>
                                </div>
                                <label htmlFor="exchangesell" className="text-white">Exchange sell</label>
                                <div className="input-group mb-3" >
                                        <select 
                                            value={this.state.exchangesell} 
                                            onChange={this.handleChange} 
                                            name="exchangesell" 
                                            className="custom-select">
                                            
                                            <option defaultValue>Choose...</option>
                                            <option value="buenbit">Buenbit</option>
                                            <option value="ripio">Ripio</option>
                                            <option value="qubit">Qubit</option>
                                        </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="amount" className="text-white">Amount</label>
                                    <input 
                                        onChange={this.handleChange}
                                        name="amount" 
                                        id="amount" 
                                        className="form-control"
                                        placeholder="Enter the amount"
                                        value={this.state.amount}
                                        required
                                    />
                               </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Calculate</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}