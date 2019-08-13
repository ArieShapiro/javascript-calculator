import React from 'react';
import { inject, observer } from 'mobx-react';
import '../styles/Console.css';

@inject('store')
@observer
class Console extends React.Component {
    render() {
        const consoleTop = this.props.store.consoleTop;
        const consoleButtom = this.props.store.consoleButtom;
        return (
            <div className="Console">
                <h3 className="top">{consoleTop}</h3>
                <h3 className="buttom">{consoleButtom}</h3>
            </div>
        )
    }

}

export default Console;