import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
// import { Actions as NavigationActions } from 'react-native-router-flux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View,
  TextInput,
  ScrollView,
  Picker,
  BackAndroid,
  TouchableOpacity
} from 'react-native';

import _ from 'lodash'
import DrawerContent from './DrawerContent'
import ControlPanel from './ControlPanel'

// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome'
var navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (navigator && navigator.getCurrentRoutes().length > 1) {
    navigator.pop();
    return true;
  }
  return false;
});


export default class Home extends Component {
  constructor(props) {
      super(props);
    }

  render() {
    return (
  <View style={styles.container}>
  <TouchableOpacity onPress={() => this.props.navigator.pop() }>
            <Icon name="back" size={30} />
          </TouchableOpacity>
    <Text style={{marginTop: 50, fontSize: 20}}>{'Person Home Screen'} </Text>
    <Text style={styles.personName}>{`${_.capitalize(this.props.person.firstName)} ${_.capitalize(this.props.person.lastName)}`}</Text>

  </View>
)
  }
}


const drawerStyles = {
  drawer: { shadowColor: '#FFFFFF', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "coral",
  }

});
