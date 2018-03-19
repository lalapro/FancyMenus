import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ViewPropTypes } from 'react-native';
import { createNavigator, createNavigationContainer, SafeAreaView, TabRouter, addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';
import IndividualNavigator from './IndividualNavigator';
import Menu from './Menu'

const MyNavScreen = ({ navigation, banner }) => (
  <SafeAreaView forceInset={{ horizontal: 'always' }}>
    <Text>{banner}</Text>
  </SafeAreaView>
);

const MyHomeScreen = ({ navigation }) => (
  <MyNavScreen banner="Home Screen" navigation={navigation} />
);


export default class Dropdown extends React.Component {
  // static propTypes = {
  //   children: PropTypes.node.isRequired,
  // }


  constructor(props){
    super(props)
    this.state = {
      icon: null,
      children: [],
      screens: [],
      screenNames: [],
      buttonClicked: false
    }
  }


  componentWillMount() {
    // this.checkLocalFile(this.props.icon)
    // let children = [];
    // let screens = [];
    // let screenNames = [];
    // this.props.children.forEach(item => {
    //   children.push({
    //     icon: item.props.icon
    //   })
    //   let screenObject = {};
    //   let page = item.props.navigateTo
    //   screenObject[item.props.name] = {
    //     screen: page
    //   }
    //   screens.push(screenObject)
    //   screenNames.push(item.props.name)
    // })
    // this.setState({ children, screens, screenNames })
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
    console.log(this.props.tabs, 'hihi')
    // const Tab = {this.props.tabs}
    return (
      <View >
        <Tab/>
        {/* <TouchableOpacity onPress={this.props.drop} style={styles.item}>
          <Image source={{uri: 'http://pixsector.com/cache/db444a5d/av3408bf9a8e4c42e82ae.png'}} style={styles.image}/>
        </TouchableOpacity>
        {this.state.buttonClicked ? ( */}
        {/* ): null} */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  menu: {
    width: 40,
    height: 400,
    backgroundColor: 'green'
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

/**
 * @flow
 */

// import React from 'react';
// import {
//   Button,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import {
//   createNavigator,
//   createNavigationContainer,
//   SafeAreaView,
//   TabRouter,
//   addNavigationHelpers,
// } from 'react-navigation';
// import SampleText from './SampleText';
//
// const MyNavScreen = ({ navigation, banner }) => (
//   <ScrollView>
//     <SafeAreaView forceInset={{ horizontal: 'always' }}>
//       <SampleText>{banner}</SampleText>
//       <Button
//         onPress={() => {
//           navigation.goBack(null);
//         }}
//         title="Go back"
//       />
//     </SafeAreaView>
//   </ScrollView>
// );
//
// const MyHomeScreen = ({ navigation }) => (
//   <MyNavScreen banner="Home Screen" navigation={navigation} />
// );
//
// const MyNotificationsScreen = ({ navigation }) => (
//   <MyNavScreen banner="Notifications Screen" navigation={navigation} />
// );
//
// const MySettingsScreen = ({ navigation }) => (
//   <MyNavScreen banner="Settings Screen" navigation={navigation} />
// );
//
// const CustomTabBar = ({ navigation }) => {
//   const { routes } = navigation.state;
//   return (
//     <SafeAreaView style={styles.tabContainer}>
//       {routes.map(route => (
//         <TouchableOpacity
//           onPress={() => navigation.navigate(route.routeName)}
//           style={styles.tab}
//           key={route.routeName}
//         >
//           <Text>{route.routeName}</Text>
//         </TouchableOpacity>
//       ))}
//     </SafeAreaView>
//   );
// };
//
// const CustomTabView = ({ router, navigation }) => {
//   const { routes, index } = navigation.state;
//   const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
//   return (
//     <SafeAreaView forceInset={{ top: 'always' }}>
//       <CustomTabBar navigation={navigation} />
//       <ActiveScreen
//         navigation={addNavigationHelpers({
//           dispatch: navigation.dispatch,
//           state: routes[index],
//         })}
//         screenProps={{}}
//       />
//     </SafeAreaView>
//   );
// };
//
// const CustomTabRouter = TabRouter(
//   {
//     Home: {
//       screen: MyHomeScreen,
//       path: '',
//     },
//     Notifications: {
//       screen: MyNotificationsScreen,
//       path: 'notifications',
//     },
//     Settings: {
//       screen: MySettingsScreen,
//       path: 'settings',
//     },
//   },
//   {
//     // Change this to start on a different tab
//     initialRouteName: 'Home',
//   }
// );
//
// const CustomTabs = createNavigationContainer(
//   createNavigator(CustomTabRouter)(CustomTabView)
// );
//
// const styles = StyleSheet.create({
//   tabContainer: {
//     flexDirection: 'row',
//     height: 48,
//   },
//   tab: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 4,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 4,
//   },
// });
//
// export default CustomTabs;
