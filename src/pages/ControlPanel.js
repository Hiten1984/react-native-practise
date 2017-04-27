import React, { Component } from 'react';
import {
  PropTypes,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import styles from './styles';
import Button from './Button';

export default class ControlPanel extends Component {
  static propTypes = {
    closeDrawer: React.PropTypes.func.isRequired
  };
  render() {
    let {closeDrawer} = this.props
    return (
      <View style={styles.controlPanel}>
        <Text style={styles.controlPanelWelcome}>
          Control Panel
        </Text>
        <Button
          onPress={() => {
            this.props.closeDrawer();
          }}
          text="Close Drawer"
        />
      </View>
    )
  }
}
