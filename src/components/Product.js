import React, {Component} from 'react';
import VariantSelector from './VariantSelector';
import ImagePicker from 'react-image-picker'

class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = {
      selectedOptions: defaultOptionValues,
      image: this.props.product.images[0].src
    };
    this.onPick = this.onPick.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  onPick(image) {
    this.setState({image:image.src})
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });

    //console.log(this.props.product.images.length);
    var pictureOptions = []
    for (var i = 0; i < this.props.product.images.length; i++) {
      pictureOptions.push(this.props.product.images[i].src)
    }
    return (
      <div className="Product">
        {this.props.product.images.length ? <img className="Product__image" src={this.state.image} alt={`${this.props.product.title} product shot`}/> : null}

        <div class="vertical-center">
          <ImagePicker
            images={pictureOptions.map((image, i) => ({src: image, value: i}))}
            onPick={this.onPick}
          />
        </div>

        <h2 id="price">£{variant.price}</h2>

        {variantSelectors}

        <button className="Product__buy button" onClick={() => this.props.addVariantToCart(variant.id, variantQuantity)}>Add to Cart</button>
      </div>
    );
  }
}

export default Product;
