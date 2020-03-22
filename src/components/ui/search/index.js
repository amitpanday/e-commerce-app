import React from 'react';
import { View } from 'react-native';
import { Input, Button, Icon } from 'native-base';

import styles from './styles';

const search = () => {
  return (
    <View style={styles.searchContent}>
      <Input
        style={styles.searchInput}
        placeholder="Search here..."
      />
      <Button style={styles.searchButton}>
        <Icon
          name="search"
          style={styles.searchButtonIcon}
        />
      </Button>
    </View>
  );
};

export default search;