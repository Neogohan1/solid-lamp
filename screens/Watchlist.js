import React from 'react';
import {View,Text} from 'react-native';

const styles = require('../includes/style');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Watchlist',
  };
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>
          Watchlist Screen
        </Text>
      </View>
    );
  }
}
