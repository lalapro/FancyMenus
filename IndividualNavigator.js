import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

export default class IndividualNavigator extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <TouchableOpacity style={styles.item}>
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
  }
});
