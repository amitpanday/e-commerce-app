import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from 'native-base';
import { AppHeader } from '~/components/common/';
import Search from '~/components/ui/search';
import CategoryBanner from './banner/';
import Slider from './slider/';
import Tabs from './tabs/';



import styles from './styles'

class Home extends Component {

  componentDidMount() {
    this.props.get();
  }

  static propTypes = {
    get: PropTypes.func,
    homepage: PropTypes.object
  };

  getComponents(componentList) {

    let components = componentList.map((options, key) => {

      switch (options.type) {
        case "slider":
          return (
            <Slider
              key={key}
              height={options.height}
              images={options.images}
            />
          )
        case "category_banner":
          return (
            <CategoryBanner
              key={key}
              categories={options.categories}
              col={options.col}
              height={options.height}
            />
          )
        case "tabs":
          return (
            <Tabs
              key={key}
              categories={options.categories}
            />
          )
        default:
          return null;
      }
    });

    return components;
  }

  render() {
    // console.log("Home page content =>", this.props.homepage.list);
    const componentsList = this.getComponents(this.props.homepage.list);
    // console.log("Home page content =>", componentsList);

    return (
      <Container style={styles.container}>
        <AppHeader>
          <Search />
        </AppHeader>
        <Content>
          {componentsList}
        </Content>
      </Container>
    );
  }
}

export default Home