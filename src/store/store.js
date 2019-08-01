import { observable, computed, action } from 'mobx';

class Store {
    @observable input = '0';
    @observable lastInput = '0';
    @observable isEqual = false;

    @computed get console() { return this.input * 2; }
    @computed get result() {
        if (!this.isEqual) {
            
        } else {

        }
    }

    @action handleKeypress(key) {
        this.input += key;
    }
    @action handleEqualPress() {
        console.log('Equal..')
    }
}

const store = window.store = new Store;

export default store;



