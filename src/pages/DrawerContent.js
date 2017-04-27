import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid } from 'react-native'
// import styles from './Styles/DrawerContentStyles'
// import { Images } from '../Themes'
// import { Actions as NavigationActions } from 'react-native-router-flux'
// import { Text, Icon, List, ListItem, Content, Left, Body, Right, Thumbnail, Badge } from 'native-base';

class DrawerContent extends Component {
  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  render () {
    return (
      <ScrollView style={styles.container}>

                 <Image source={Images.spottoLogoRound}  style={styles.logo}>
                 </Image>
            <ListItem button onPress={() => { NavigationActions.tabbar(); this.toggleDrawer(); }} icon style={styles.links} >
          <Left>
            <Icon name="home" />
          </Left>
          <Body>
            <Text >Home</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem button onPress={() => { NavigationActions.support(); this.toggleDrawer(); }} icon style={styles.links} >
          <Left>
            <Icon active name="mail-open" />
          </Left>
          <Body>
            <Text>Support</Text>
          </Body>
          <Right/>
        </ListItem>
          <ListItem button onPress={() => { NavigationActions.logout(); this.toggleDrawer(); }} icon style={styles.links} >
          <Left>
            <Icon active name="alert" />
          </Left>
          <Body>
            <Text>Logout</Text>
          </Body>
          <Right/>

        </ListItem>
      </ScrollView>
    )
  }
}
// 
// DrawerContent.contextTypes = {
//   drawer: React.PropTypes.object
// }



export default (DrawerContent)
