import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,Image} from 'react-native';

export default class Facebook extends React.Component{
    render(){
  return (
    <View style={styles.container}>
       <Text style={styles.textStyle}>Facebook</Text>
       <Image style={styles.imageIcon}
          source={require(
              '../assets/facebook.png'
          )}
      />
      <StatusBar style="auto" />
    </View>
  );
    }
}

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'xx-large'
  },
  imageIcon: {
    width: 150,
    height: 150,
   
  }
});
