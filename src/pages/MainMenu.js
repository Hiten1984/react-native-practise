import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
// import { Actions as NavigationActions } from 'react-native-router-flux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Navigator,
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

const people = [
      {firstName: "hiten",  lastName: "bahri", empId: 1123},
      {firstName: "marvel",  lastName: "spider", empId: 9345},
      {firstName: "marvel",  lastName: "hulk", empId: 3459},
      {firstName: "marvel",  lastName: "captain", empId: 3495},
      {firstName: "marvel",  lastName: "america", empId: 3845},
      {firstName: "marvel",  lastName: "the", empId: 3457},
      {firstName: "marvel",  lastName: "widower", empId: 6345},
      {firstName: "marvel",  lastName: "thor", empId: 3455},  {firstName: "marvel",  lastName: "spider", empId: 345},
      {firstName: "marvel",  lastName: "others", empId: 3445},
      {firstName: "marvel",  lastName: "Puli", empId: 3345},
      {firstName: "marvel",  lastName: "spider2", empId: 2345},
      {firstName: "marvel",  lastName: "spider3", empId: 1345},
      {firstName: "avengers",  lastName: "iron", empId: 5167}
]

export default class MainMenu extends Component {
  constructor(props) {
      super(props);
      this.state = {text: ''};
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(people)
      };
    }

    _navigateToPersonShow(person) {
        this.props.navigator.push({
          name: "Home",
          person,
          sceneConfig: Navigator.SceneConfigs.FloatFromBottom
        })
      }

    _renderPersonRow(person) {
        return (
          //<TouchableOpacity style={styles.personRow} onPress={(event) => console.log(person
          <TouchableOpacity style={styles.personRow} onPress={(event) => this._navigateToPersonShow(person) }>
            <Text style={styles.personName}>{`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}</Text>
            <View style={{flex: 1}} />
            <Icon name="chevron-right" size={10} style={styles.personMoreIcon} />
          </TouchableOpacity>
        )
      }

  render() {
    navigator = this.props.navigator;
    return (
      <Drawer
  type="overlay"
  open={true}
  content={<ControlPanel />}
  tapToClose={true}
  openDrawerOffset={0.2} // 20% gap on the right side of drawer
  panCloseMask={0.2}
  closedDrawerOffset={-3}
  styles={drawerStyles}
  tweenHandler={(ratio) => ({
    main: { opacity:(2-ratio)/2 }
  })}
  >
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
    <ListView
          style={{marginTop: 100}}
          dataSource={this.state.dataSource}
          renderRow={(person) => { return this._renderPersonRow(person) }} />

  </View>
</Drawer>
    );
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

    backgroundColor: '#F5FCFF',
  },
  personRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },

  personName: {
    marginLeft: 25
  },

  personMoreIcon: {
    color: "green",
    height: 10,
    width: 10,
    marginRight: 25
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
