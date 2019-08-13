import React from 'react';
import { observer, inject } from 'mobx-react';
import Button from './components/Button.js';
import Console from './components/Console.js';
import './styles/App.css';




@inject('store')
@observer
class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Console />
        <div className="row">
          <Button width={2} type='AC' />
          <Button type='/'/>
          <Button type='x' />
        </div>
        <div className="row">
          <Button type='7' />
          <Button type='8' />
          <Button type='9' />
          <Button type='-' />
        </div>
        <div className="row">
          <Button type='4' />
          <Button type='5' />
          <Button type='6' />
          <Button type='+' />
        </div>
        <div className="row">
          <div>
            <div className="row">
              <Button type='1' />
              <Button type='2' />
              <Button type='3' />
            </div>
            <div className="row">
              <Button type='0' width={2} />
              <Button type='.' />
            </div>
          </div>
          <div>
            <Button type='=' height={2} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
