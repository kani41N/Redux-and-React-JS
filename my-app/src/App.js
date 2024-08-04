import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerAdded from './CustomerAdded';
import { Provider } from 'react-redux';
import CustomerView from './CustomerView';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
      <h1>React Redux Customer Example</h1>
      <CustomerAdded />
      <CustomerView />
    </div>
    </Provider>
  );
}

export default App;
