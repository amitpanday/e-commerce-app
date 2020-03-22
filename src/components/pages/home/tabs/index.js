import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Tab, Tabs, ScrollableTab } from 'native-base'
import { ProductItem } from "~/components/common/";

import styles from './styles';

const categoryTabs = (props) => {
  const { categories } = props;

  const tabs = categories.map((item, key) => (
    <Tab
      key={key}
      tabStyle={styles.tab}
      textStyle={styles.tabText}
      activeTabStyle={styles.activeTabStyle}
      activeTextStyle={styles.activeTextStyle}
      heading={item.title}
    >
      <View style={styles.itemContent}>
        {
          item.products.map((product, productKey) => (
            <ProductItem
              key={productKey}
              product={product}
            />
          ))
        }
      </View>
    </Tab>
  ));

  return (
    <Tabs
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
      renderTabBar={
        () => <ScrollableTab style={{ backgroundColor: "red" }} />
      }
    >
      {tabs}
    </Tabs>
  );
};

categoryTabs.propTypes = {
  categories: PropTypes.array
}

export default categoryTabs;
