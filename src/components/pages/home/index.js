import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import AppHeader from '~/components/common/header/';
import Search from '~/components/ui/search';


// Styles
import styles from './styles'

class Home extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <AppHeader>
          <Search />
        </AppHeader>
      </Container>
    );
  }
}

export default Home