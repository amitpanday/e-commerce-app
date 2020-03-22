import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { View, Image, TouchableHighlight } from 'react-native';
import { Text, Col, Row } from 'native-base';
import { AddToCartButton } from '~/components/common/';

// Styles
import { styles, getCategoryStyles } from "./styles";

const item = (props) => {
  this.defaultProps = {
    type: "default",
    product: {},
  }

  let itemStyles = styles;

  const {
    type,
    product,
    navigation,
    style
  } = props;

  if (type == "category") {
    itemStyles = getCategoryStyles();
  }

  return (
    <View style={[itemStyles.content, style]}>
      <Col>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => console.log('This is common product/item component')}
        >
          <Image
            resizeMode="contain"
            source={{ uri: product.cover }}
            style={itemStyles.image}
          />
        </TouchableHighlight>
      </Col>
      <Col style={itemStyles.titleContent}>
        <Text style={itemStyles.titleText}>
          {product.title}
        </Text>
        <Text
          style={itemStyles.shortDescription}
          note
        >
          {product.shortDescription}
        </Text>
      </Col>
      <Row>
        {
          product.oldPrice &&
          <Col>
            <Text style={itemStyles.oldPrice}>
              {product.oldPrice} Common Product Old price
            </Text>
          </Col>
        }
        <Col>
          <Text style={itemStyles.price}>
            {product.price} Common Product price
          </Text>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddToCartButton
            product={product}
            buttonStyle={itemStyles.button}
            iconStyle={itemStyles.buttonIcon}
            textStyle={itemStyles.buttonText}
          />
        </Col>
      </Row>
    </View>
  );
};

item.propTypes = {
  type: PropTypes.string,
  product: PropTypes.object,
  navigation: PropTypes.object,
  style: PropTypes.object
}

export default withNavigation(item);