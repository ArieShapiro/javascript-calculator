import React from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';


@inject('store')
@observer
class App extends React.Component {
  render() {

    return (
      <div className="App">
      
          <h1> { this.props.store.string } </h1>
      
    </div>
    );
  }
}

export default App;
