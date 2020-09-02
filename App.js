
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Facebook from './Screens/Facebook'
import Instagram from './Screens/Instagram'

export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
  }
}
  
const TabNavigator = createBottomTabNavigator({
  Facebook:{
    screen:Facebook
  },
  Instagram:{
    screen:Instagram
  }
})
const AppContainer = createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex:0.95,
    backgroundColor:'black',
    alignItems: 'justify',
    justifyContent: 'center',

  },

});
