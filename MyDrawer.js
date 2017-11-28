import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import { CustomNavigation, CustomPage } from './CustomNavigation';



export default class MyDrawer extends React.Component {
  render() {
    return (
      <CustomNavigation
        icon={{uri: 'https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png'}}
        style={styles.menu}
      >
        <CustomPage path={FirstPage} icon={require(`./assets/apple.png`)}/>
        <CustomPage path={SecondPage} icon={require(`./assets/phone.png`)}/>
        <CustomPage path={ThirdPage} icon={require(`./assets/stats.png`)} changeIcon={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/102109-200.png'}}/>
        <CustomPage path={FourthPage} icon={require(`./assets/whyfy.png`)} />
      </CustomNavigation>
    )
  }
}


const styles = StyleSheet.create({
  menu: {
    top: 50,
    left: 50
  }
});
