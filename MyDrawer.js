import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import { FancyNavigation, CustomPage } from './FancyNavigation';

const {height, width} = Dimensions.get('window');


export default class MyDrawer extends React.Component {
  render() {
    return (
      <FancyNavigation
        icon={{uri: 'https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png'}}
        style={styles.menu}
      >
        <CustomPage path={FirstPage} icon={require(`./assets/apple.png`)}/>
        <CustomPage path={SecondPage} icon={require(`./assets/phone.png`)}/>
        <CustomPage path={ThirdPage} icon={require(`./assets/stats.png`)} />
        <CustomPage path={FourthPage} icon={require(`./assets/whyfy.png`)} />
      </FancyNavigation>
    )
  }
}


const styles = StyleSheet.create({
  menu: {
    top: height - 100,
    left: width/2 - 30
  }
});
