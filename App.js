import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Dropdown from './FancyMenus';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import { Drawer } from './test';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dropdown icon={'https://d30y9cdsu7xlg0.cloudfront.net/png/604152-200.png'}>
          <View icon={require('./assets/whyfy.png')} navigateTo={FirstPage} name={'First'}/>
          <View icon={require('./assets/phone.png')} navigateTo={SecondPage} name={'Second'}/>
        </Dropdown>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
