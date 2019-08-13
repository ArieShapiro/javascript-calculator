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

    //********************functions******************//
    convertToMathExpression = string => {
        return eval(string);
    }
    // convertToMathExpression = string => {
    //     // debugger
    //     let operator, number, sum;
    //     string = string.split(' ');
    //     string.forEach(char => {
    //         //if number
    //         if (!isNaN(char)) {
    //             number = parseFloat(char);
    //             //if sum is empty - put this first number there
    //             sum = !sum ? number : sum;
    //             //if comes after operator
    //             if (operator) {
    //                 switch (operator) {
    //                     case '+':
    //                         sum += number;
    //                         break;
    //                     case '-':
    //                         sum -= number;
    //                         break;
    //                     case 'x':
    //                         sum *= number;
    //                         break;
    //                     case '/':
    //                         sum /= number;
    //                         break;
    //                 }
    //             }
    //             operator = null;
    //         }
    //         //if operator
    //         else operator = char;
    //     });
    //     return sum;
    // }

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



