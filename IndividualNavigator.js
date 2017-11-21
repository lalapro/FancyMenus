import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

export default class IndividualNavigator extends React.Component {
  static navigationOptions = {
    drawerLabel: 'hello',
    drawerIcon: () => (
      <Image
        source={{uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/604152-200.png'}}
        style={styles.icon}
      />
    ),
  };


  constructor(props){
    super(props)
    this.state = {

    }
  }

  navigate(x) {
    console.log('on click x', this.props.navigation)
  }

  render() {
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.navigate(this.props.screenName)}>
        <Image source={this.props.item.icon} style={styles.image}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    width: 25,
    height: 25,
    marginBottom: 25
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  },
  icon: {
    width: 24,
    height: 24,
  },
});
