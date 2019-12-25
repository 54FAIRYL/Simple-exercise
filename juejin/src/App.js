import React, { Component } from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../src/common/header/index';
import Home from './pages/home';
import Activity from './pages/activity';
import Write from './pages/write'
import store from './store/index';
import Globalstyle from './style';

class App extends Component {
  render() {
      return (
        <Provider store={store}>
          <Globalstyle />
          <BrowserRouter> 
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/activity' exact component={Activity}></Route>
            <Route path='/write' exact component={Write}></Route>
          </div>
          </BrowserRouter>
        </Provider>
          
    );
  }
  
}

export default App;
