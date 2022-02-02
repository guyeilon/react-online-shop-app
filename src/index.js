import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import produactReducer, { productsFetch } from './features/produactSlice';
import { productsApi } from './features/prodactApi';
import cartReducer, { getTotals } from './features/cartSlice';

const store = configureStore({
  reducer: {
    products: produactReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
