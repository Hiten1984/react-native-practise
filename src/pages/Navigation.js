import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Navigator,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Login from './Login';

export default class Navigation extends Component {

  renderScene = (route, navigator) => {
   if(route.name == 'Login') {
     return <Login navigator={navigator} />
   }
  }

render() {
    return (
        <Navigator
        style={{ flex:1 }}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{ name: 'Login' }}
        />
    );
  }
}

const styles = StyleSheet.create({
    toolbar: {
     backgroundColor: '#2E8B57',
     height: 40,
     fontFamily: 'noto_serif_regular',
    },
});
