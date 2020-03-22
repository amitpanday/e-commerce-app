import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';

import { addProduct } from '~/store/actions/cart';


const addToCartButton = (props) => {

  const {
    buttonStyle,
    iconStyle,
    textStyle,
    product,
    addProduct
  } = props;

  const clickHandler = () => {
    addProduct(product);
  }

  return (
    <Button
      iconLeft
      style={buttonStyle}
      onPress={clickHandler}
    >
      <Icon name={'cart'} style={iconStyle} />
      <Text style={textStyle}>
        Common Cart component
      </Text>
    </Button>
  );
};

addToCartButton.propTypes = {
  buttonStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  textStyle: PropTypes.object,
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = {
  addProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(addToCartButton);