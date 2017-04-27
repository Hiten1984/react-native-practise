import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Navigator,
  TouchableHighlight,
  // BackAndroid,
  ScrollView
} from 'react-native';

import MainMenu from './MainMenu';
import Home from './Home';
import Container from '../components/Container';
import Button from '../components/Button';
import Label from '../components/Label';

const appLogo = require("../icons/icon_13cabs.png");

// var navigator;
//
// BackAndroid.addEventListener('hardwareBackPress', () => {
//   if (navigator && navigator.getCurrentRoutes().length > 0) {
//     navigator.pop();
//     return true;
//   }
//   return false;
// });
//

export default class Login extends Component {
renderScene(route, navigator) {
  // navigator = navigator;
  var globalNavigatorProps = { navigator }
  if(route.name == 'Main') {
    return (<MainMenu {...globalNavigatorProps}
      />)
  }
  else if(route.name == 'Home') {
    return (<Home {...globalNavigatorProps}
      person={route.person}/>)
  }
  else if(route.name == 'Login') {
    return <LoginMenu navigator={navigator} />
 } else {
   <Text>{`YO YOU MESSED SOMETHING UP ${route}`}</Text>
 }
}

// renderScene (route, navigator) {
//     return <route.component navigator={navigator} />
// }

render() {
    return (
      <Navigator
          style={{ flex:1 }}
          // renderScene={this.renderScene.bind(this)}
          initialRoute={{ name: 'Login' }}
          ref="appNavigator"
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
          configureScene={(route) => ({
            ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight })} 
            />
    );
  }
}

class LoginMenu extends Component {
  press() {
    this.props.navigator.push({name: 'Main',});
  }

  render() {
    return (
      <ScrollView style={styles.scroll}>
      <Container>
        <View style={styles.iconContainer}>
              <Image
                source={appLogo}
                style={styles.inputIcon}
                resizeMode="contain"
              />
        </View>
      </Container>

          <Text style={styles.titleText}>
            Welcome to 13Cabs Driver app
            </Text>

        <Container>
          <Label text="Driver Number" />
            <TextInput
              style={styles.textInput}
            />
        </Container>
        <Container>
          <Label text="Pin" />
            <TextInput
            secureTextEntry={true}
            style={styles.textInput}
          />
        </Container>
        <Container>
          <Button
            label="Sign In"
            styles={{button: styles.primaryButton, label: styles.buttonWhiteText}}
            onPress={this.press.bind(this)}
            />
        </Container>
        <Container>
          <Button
            label="Forgot Pin"
            styles={{button: styles.alignRight, label: styles.label}}
            />
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
     backgroundColor: '#FFFF00',
     padding: 30,
     flexDirection: 'column'
 },
 label: {
    color: '#0d8898',
    fontSize: 20
},
alignRight: {
    alignSelf: 'flex-end'
},
textInput: {
    height: 50,
    fontSize: 20,
    backgroundColor: '#FFF'
},
buttonWhiteText: {
    fontSize: 20,
    color: '#FFF',
},
buttonBlackText: {
    fontSize: 20,
    color: '#595856'
},
primaryButton: {
    backgroundColor: '#000000'
},
secondaryLabel: {
    backgroundColor: '#D3D3D3'
},
iconContainer: {
  width: 200,
  height: 40,
  paddingHorizontal: 15,
  justifyContent: 'center',
  alignItems: 'center'
},
labelContainer: {
  height: 40,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
titleText: {
  fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'red'
  },
inputIcon: {
  width: 200,
  height: 200
}
});
