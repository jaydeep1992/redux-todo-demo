import React, {Component} from 'react';
import {Container, Button, Header, Text, View} from 'native-base';
import styles from './styles/HomeScreenStyles';

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={styles.headerFooter}>
        <Header style={styles.headerFooter} />
        <View style={styles.contentView}>
          <Button block success onPress={() => navigate('ReduxToDoScreen')}>
            <Text>Redux</Text>
          </Button>
          <Button
            block
            warning
            style={styles.reduxSauceBtn}
            onPress={() => navigate('ReduxSauceToDoScreen')}>
            <Text>Redux Sauce</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default HomeScreen;
