import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ViewPropTypes } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import IndividualNavigator from './IndividualNavigator';
import FirstPage from './FirstPage'


export default class Menu extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      icon: null
    }
  }


  componentDidMount() {
    // this.checkLocalFile(this.props.icon)
  }

  checkLocalFile(icon) {
    if (typeof icon === 'number') {
      this.setState({
        icon: icon
      })
    } else {
      this.setState({
        icon: {uri: icon}
      })
    }
  }


  render() {
    // console.log(this.props.icon, 'menu js')
    return (
      <TouchableOpacity onPress={this.props.drop} style={styles.item}>
        <Image source={{uri: 'http://pixsector.com/cache/db444a5d/av3408bf9a8e4c42e82ae.png'}} style={styles.image}/>
      </TouchableOpacity>
    )
  }
}

// const navigator = DrawerNavigator({
//   First: {
//     screen: FirstPage
//   },
//   Second: {
//     screen: SecondPage
//   }
// })


const styles = StyleSheet.create({
  menu: {
    width: 40,
    height: 400,
    backgroundColor: 'lightblue'
  },
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
})

// module.exports.Dropdown = Dropdown
// module.exports.Fan = Fan
