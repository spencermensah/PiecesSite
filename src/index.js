import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import './app.css';

const client = Client.buildClient({
  storefrontAccessToken: '17863866dc94c90d15e8f1ea1a96d80f',
  domain: 'cruisegang.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
