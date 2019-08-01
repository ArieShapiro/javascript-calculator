import React from 'react';
import { inject, observer } from 'mobx-react';
import '../styles/Console.css';

@inject('store')
@observer
class Console extends React.Component {
    render() {
        const isEqual = this.props.store.isEqual;
        const store = this.props.store;
        return (
            <div className="Console">
                <h3>{isEqual ? store.input : store.input}</h3>
                <h3>{isEqual ? store.lastInput : store.lastInput}</h3>
            </div>
        )
    }

}

export default Console;