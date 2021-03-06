import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './main/main';
import { store } from './order/redux/redux-store';
import 'moment/locale/ru';
import 'antd/dist/antd.css';

const App = () => {

  return <Provider
    store={store}>
    <BrowserRouter>
      <div className='App'>
        <Main />
      </div>
    </BrowserRouter>
  </Provider>
}

export default App;
