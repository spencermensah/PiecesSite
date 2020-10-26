import React, { Component } from 'react';
import Products from '../components/Products';
import Cart from '../components/Cart';
import Client from 'shopify-buy';
import './App.css';
import logo from './delayed2.gif'
import logoText from './LOGO.png'
import logoIcon from './logoIcon.png'

const client = Client.buildClient({
  storefrontAccessToken: '35c5c4114d1b21d50d2afd91bcd15959',
  domain: 'piecesworld.myshopify.com'
});

class Home extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    document.body.style.background= '#e1e1e1';
    client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });

    client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart(variantId, quantity){
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  render() {

    return (
      <div className="App">

          {!this.state.isCartOpen &&
            <div className="App__view-cart-wrapper">
              <br></br>
              <button className="App__view-cart" onClick={()=> this.setState({isCartOpen: true})}><img id='basket' src={logoIcon} alt="loading..." /></button>
            </div>
          }

          <div id='logo'>
            <img src={logo} alt="loading..." />
          </div>
            <img id='logoText' src={logoText} alt="loading..." />

          <br/>

        <Products
          products={this.state.products}
          client={client}
          addVariantToCart={this.addVariantToCart}
        />

        <br></br>
        <h2 id="footer">Powered by Crea Cö</h2>
        <h3 id="footer">Copyright © 2020 PIECES c/o Afican Youth rights reserved</h3>
        <br></br>

        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />


      </div>
    );
  }
}

export default Home;
