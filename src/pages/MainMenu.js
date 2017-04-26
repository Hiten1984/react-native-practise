import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  BackAndroid,
  TouchableOpacity
} from 'react-native';

var navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (navigator && navigator.getCurrentRoutes().length > 1) {
    navigator.pop();
    return true;
  }
  return false;
});

export default class MainMenu extends Component {
  render() {
    navigator = this.props.navigator;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu{'\n'}
        </Text>
        <View style={styles.container}>
					<TouchableOpacity
						style={styles.button}
						onPress={() => this.props.navigator.pop()}
	        >
	        	<Text style={styles.buttonText}>Log Out</Text>
	        </TouchableOpacity>
	      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
  height: 44,
  width: 200,
  backgroundColor: '#4883da',
  alignSelf: 'center',
  justifyContent: 'center'
}
});
