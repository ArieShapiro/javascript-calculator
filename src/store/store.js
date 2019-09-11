import { observable, computed, action } from 'mobx';


class Store {
    @observable consoleTop = '';
    @observable consoleButtom = '0';

    //******************actions*****************//
    @action clearAll() {
        this.consoleTop = '';
        this.consoleButtom = '0'
    }
    @action handleEqual() {
        const result = this.convertToMathExpression(this.consoleTop);
        this.consoleTop += ' = ' + result;
        this.consoleButtom = result;
    }
    @action handleDot() {
        this.consoleTop += '.'
    }
    @action handleInteger(key) {
        if (this.consoleButtom !== '0') this.clearAll();
        this.consoleTop += key;
    }
    @action handleOperator(key) {
        key = key === 'x' ? '*' : key;
        this.consoleTop += ` ${key} `;
    }

    /**************functions******************/
    handleKeypress = key => {
        if (key === '=') {
            this.handleEqual();
        } else if (key === 'AC') {
            this.clearAll();
        } else {
            this.handleInput(key);
        }
    }
    handleInput = key => {
        if (key === '.') {
            this.handleDot();
        } else if (Number.isInteger(parseInt(key))) {
            this.handleInteger(key);
        } else {
            //operator
            this.handleOperator(key);
        }
    }
}

const store = window.store = new Store;

export default store;



