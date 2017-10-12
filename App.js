import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator} from 'react-navigation';
const styles = require('./includes/style');

import MainScreen from './screens/MainScreen';
import Watchlist from './screens/Watchlist';
import History from './screens/History';

export default class App extends React.Component {
  render() {//test
    return (
      <View style={styles.container}>
        <MainScreenNavigator />
        <Text>
          Test
        </Text>
      </View>
    );
  }

}

const MainScreenNavigator = TabNavigator({
  MainScreen: { screen: MainScreen },
  Watchlist: { screen: Watchlist},
  History: { screen: History},
});
