import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

import Calculator from '../components/home/Calculator';
import Results from '../components/home/Results';
import ArrowUp from '../components/home/ArrowUp';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            data: {},
            showResults: false,
            loading: false,
            vars: {} // Variables con la que se hizo la consulta a la API
        };
    }

    setData = (data, vars) => {
        this.setState({ data: data,vars: vars, showResults: true, loading: true});
    }

    setLoading = (isLoading) => {
        this.setState({loading: isLoading});
    }

    render() {
        return (
            <div>
                <Calculator handleResults={this.setData} 
                            handleLoading={this.setLoading}/>     
                {
                this.state.showResults ?
                    <Results data={this.state.data} vars={this.state.vars}/>
                    : this.state.loading ? 
                        <div className="row justify-content-center mt-4">
                            <Spinner animation="border" variant="primary"/>
                        </div>                            
                        : <div/>  
                }
                <ArrowUp/>
            </div>
        )
    }
}
