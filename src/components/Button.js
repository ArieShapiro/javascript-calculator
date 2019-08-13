import React from 'react';
import { inject } from 'mobx-react';
import '../styles/Button.css';

@inject('store')
class Button extends React.Component {
    // handleKeypress = key => {
    //   this.props.store.handleKeypress(key);      
    // }
    render() {
        let styleObj = {};
        //normal
        if (!this.props.width && !this.props.height) {
            styleObj = {
                width: '60px',
                height: '60px'
            };
            //high
        } else if (this.props.height) {
            styleObj = {
                width: '60px',
                height: '122px'
            };
            //wide
        } else {
            styleObj = {
                width: '122px',
                height: '60px'
            };
        }
        const key = this.props.type;
        const store = this.props.store;
        return (
            <div className="Button"
                style={{ width: styleObj.width, height: styleObj.height }}
                onClick={() => { store.handleKeypress(key) }}
            >
                <p>{key}</p>
            </div>
        )
    }
}

export default Button;