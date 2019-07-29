import { observable, computed, action } from 'mobx';

class Store {
@observable string = 'something';
}

const store = window.store = new Store;
export default store;



