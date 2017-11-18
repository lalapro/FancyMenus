import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ViewPropTypes } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import IndividualNavigator from './IndividualNavigator';


export default class Dropdown extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }


  constructor(props){
    super(props)
    this.state = {
      icon: null,
      children: [],
      screens: [],
      buttonClicked: false
    }
  }

  // const arr = ['shirt', 'shoes', 'hat',...];
  // const tab = [];
  //
  // for (let i = 0; i < arr.length; i++) {
  //   tab[arr[i]] = { screen: AppScreen };
  // }
  //
  // const App = TabNavigator(
  //   tab,
  //   {
  //     tabBarOptions: { ... }
  //   }
  // );

  componentDidMount() {
    this.checkLocalFile(this.props.icon)
    let children = [];
    let screens = [];
    this.props.children.forEach(item => {
      children.push({
        icon: item.props.icon
      })
      screens.push({
        screen: item.props.navigateTo
      })
    })
    this.setState({ children })
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

  drop() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
  }

  render() {
    // console.log(JSON.stringify(this.state.screens))
    return (
      <View style={styles.menu}>
        <TouchableOpacity onPress={this.drop.bind(this)} style={styles.item}>
          <Image source={this.state.icon} style={styles.image}/>
        </TouchableOpacity>
        {this.state.buttonClicked ? (
          this.state.children.map((item, i) => (
          <IndividualNavigator item={item} key={i}/>
        ))) : null}
      </View>
    )
  }
}

const navigator = DrawerNavigator(

)


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
