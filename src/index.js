import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: '35c5c4114d1b21d50d2afd91bcd15959',
  domain: 'piecesworld.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
