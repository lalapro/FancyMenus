import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import { CustomNavigation, CustomPage } from './CustomNavigation';

const {height, width} = Dimensions.get('window');


export default class MyDrawer extends React.Component {
  render() {
    return (
      <CustomNavigation
        icon={{uri: 'https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png'}}
        style={styles.menu}
        radius={100}
      >
        <CustomPage path={FirstPage} icon={require(`./assets/apple.png`)}/>
        <CustomPage path={SecondPage} icon={require(`./assets/phone.png`)}/>
        <CustomPage path={ThirdPage} icon={require(`./assets/stats.png`)} />
        <CustomPage path={FourthPage} icon={require(`./assets/whyfy.png`)} />
      </CustomNavigation>
    )
  }
}


const styles = StyleSheet.create({
  menu: {
    top: height - 500,
    left: width/2 - 30
  }
});
