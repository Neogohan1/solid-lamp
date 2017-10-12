import React from 'react';
import {View,Text,TextInput,Picker, Switch} from 'react-native';

const styles = require('../includes/style');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Main',
  };
  constructor (props){
    super(props);
    this.state={
      text:'',
      radius:'20km',
      switchState:true,
    };
  }

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <Text style={styles.columnText1}>
            Service Status: Stopped
          </Text>
          <Text style={styles.columnText2}>
            Need Help?
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <Text>
            Location: Doolandella
          </Text>
        </View>
        <View style={styles.rowContainer}>
          <TextInput style={styles.textInput}
            value={this.state.text}
            placeholder='Change search location'
            onChangeText={(text)=>{
              this.setState({text});
          }}>
          </TextInput>
          <Picker
            style={styles.radiusPicker}
            selectedValue={this.state.radius}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({radius: itemValue});
              console.log(itemValue);
            }}>
            <Picker.Item label="5km" value="5" />
            <Picker.Item label="10km" value="10" />
            <Picker.Item label="20km" value="20" />
            <Picker.Item label="50km" value="50" />
            <Picker.Item label="100km" value="100" />
            <Picker.Item label="250km" value="250" />
            <Picker.Item label="500km" value="500" />
          </Picker>
        </View>
        <View style={styles.rowContainer}>
          <Text>Wifi Only</Text>
          <Switch
            value={this.state.switchState}
            onValueChange={(value)=>{
            this.setState({switchState:value});
          }}>

        </Switch>
        </View>


      </View>
    );
  }
}
