import { observable, computed, action } from 'mobx';

class Store {

}

const store = window.store = new Store;
export default store;






// import { observable, computed, action } from 'mobx';
// import quotes from '../quotes.js';

// const colors = ['green', 'red', 'blue', 'lightblue', 'pink', 'aquamarine', 'gray', 'orange', 'hotpink', 'coral'];

// class QuotesStore {
//     @observable quotes = quotes;
//     @observable chosenQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
//     @observable chosenColor = colors[Math.floor(Math.random() * colors.length)];

//     @action chooseRandomQuoteAndColor() {
//         this.chosenQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
//         this.chosenColor = colors[Math.floor(Math.random() * colors.length)];
//     }

// }

// const store = window.store = new QuotesStore;

// export default store;