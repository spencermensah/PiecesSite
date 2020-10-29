import React, { Component } from 'react';
import Product from './Product';


class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <div>

          <Product
            addVariantToCart={this.props.addVariantToCart}
            client={this.props.client}
            key={product.id.toString()}
            product={product}
          />
        <br></br>
        </div>

      );
    });

    return (
      <div>
        <div>

        </div>
        <div className="video">
          {products}
        </div>
      </div>
    );
  }
}

export default Products;
