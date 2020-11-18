import React, { Component } from 'react';
import { animateScroll as scroll} from 'react-scroll';

export default class ArrowUp extends Component {

    onClickUp = () => {
        scroll.scrollToTop();
     }

     
    render() {
        return (
            <span onClick={this.onClickUp} className="go-up"> 
                    <i className="far fa-caret-square-up"></i>
            </span>  
        );
    }
}
