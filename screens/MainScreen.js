import React from 'react';
import {View,Text} from 'react-native';

const styles = require('../includes/style');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Main',
  };
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>
          Main GT Watcher Screen
        </Text>
      </View>
    );
  }
}
