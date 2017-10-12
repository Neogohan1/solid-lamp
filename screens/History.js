import React from 'react';
import {View,Text} from 'react-native';

const styles = require('../includes/style');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'History',
  };
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>
          History Screen
        </Text>
      </View>
    );
  }
}
