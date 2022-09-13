import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RootReducer from './store/reducers/RootReducer';
import { Provider } from 'react-redux';
import { applyMiddleware, legacy_createStore as createStore } from 'redux' ; 
import thunk from 'redux-thunk'


const store = createStore(RootReducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
