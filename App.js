import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Dropdown from './FancyMenus';
import CustomTabs from './CustomNavigation';
import MyDrawer from './MyDrawer';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyDrawer/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
