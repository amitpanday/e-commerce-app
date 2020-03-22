import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import { Dimensions, Image, TouchableHighlight } from 'react-native';
import { Icon, Text, Col, Row } from 'native-base';

import styles from './styles';

const { width } = Dimensions.get('window');

const banner = (props) => {
  const {
    categories,
    col,
    height,
    style,
    navigation
  } = props;

  const bannerWidth = (width / col) - (col * (2 / col));

  const cols = categories.map(
    (item, key) => (
      <TouchableHighlight
        key={key}
        underlayColor="transparent"
        onPress={() => navigation.navigate("CategoryList", {
          id: item.id
        })}
      >
        <Col style={styles.imageContent, {
          width: bannerWidth,
          height: height + 50
        }}>
          <Image
            resizeMode={'contain'}
            source={{ uri: item.source }}
            style={[styles.image, {
              width: bannerWidth,
              height: height
            }]}
          />
          <Text style={styles.text}>
            <Icon
              name={"arrow-forward"}
              style={styles.textIcon}
            />
          </Text>
        </Col>
      </TouchableHighlight>
    ));

  return (
    <Row style={[styles.row, style]}>
      {cols}
    </Row>
  );
}

banner.propTypes = {
  categories: PropTypes.array.isRequired,
  col: PropTypes.number,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
  navigation: PropTypes.object
}


export default withNavigation(banner);