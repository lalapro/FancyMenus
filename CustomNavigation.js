import React from 'react';
import {
  Button,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated
} from 'react-native';
import {
  createNavigator,
  createNavigationContainer,
  SafeAreaView,
  TabRouter,
  addNavigationHelpers,
} from 'react-navigation';
// import FancyMenus from './FancyMenus'

const { height: D_HEIGHT, width: D_WIDTH } = Dimensions.get('window');

const arr = []
for (var i = 0; i < 4; i++) {
  arr.push(i)
}


class CustomNavigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      customTabRouter: {},
      customIcons: [],
      isPressed: false,
      currentPage: 0,
      currentMenuIcon: props.icon,
      animatedValue: []
    }

  }

  componentWillMount() {
    this.createCustomRouter(this.props.children);
    this.createCustomIconArray(this.props.children);
    this.resetAnimations();
  }

  createCustomRouter(screens) {
    let customTabRouter = {};
    let count = 0;
    screens.forEach(child => {
      path = child.props.path;
      menuIcon = child.props.changeIcon || this.props.icon;
      customTabRouter[count] = { screen: path, menuIcon: menuIcon }
      count++;
    })
    this.setState({customTabRouter});
  }

  createCustomIconArray(screens) {
    let customIcons = [];
    screens.forEach(child => {
      customIcons.push(child.props.icon)
    })
    this.setState({customIcons});
  }

  pressMe() {
    this.setState({ isPressed: !this.state.isPressed }, () => {
      this.state.isPressed ? this.animate() : this.resetAnimations()
    })
  }

  changeCurrentPage(currentPage) {
    currentPage = currentPage.toString();
    this.setState({currentPage}, () => {
      currentMenuIcon = this.state.customTabRouter[this.state.currentPage].menuIcon;
      this.setState({currentMenuIcon})
    })
  }

  animate() {
    const animations = this.state.animatedValue.map((item, i) => {
      return Animated.timing(
        this.state.animatedValue[i],
        {
          toValue: 1,
          duration: 100
        }
      )
    })
    Animated.sequence(animations).start()
  }

  resetAnimations() {
    this.props.children.forEach((value, i) => {
      this.state.animatedValue[i] = new Animated.Value(0)
    })
  }


  render() {
    const CustomTabBar = ({ navigation }) => {
      const menuStyle = this.props.style
      const { routes } = navigation.state;

      // transform: [{
      //       translateY: this.state.fadeAnim.interpolate({
      //         inputRange: [0, 1],
      //         outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
      //       }),
      //     }],

      const animations = routes.map((route, i) => {
        // console.log(movingMargin)
        return <Animated.View key={i} style={{opacity: this.state.animatedValue[i]}}>
            <TouchableOpacity
                onPress={() => {
                  navigation.navigate(route.routeName)
                  this.changeCurrentPage(i)
                }}
                style={[
                  styles.tab,
                  {
                    transform: [{
                      translateY: this.state.animatedValue[i].interpolate({
                        inputRange: [0, 1],
                        outputRange: [-150, 0]
                      })
                    }]
                  }]}
                key={route.routeName}
              >
                <Image source={this.state.customIcons[i]} style={styles.image}/>
              </TouchableOpacity>
          </Animated.View>
      })
      return (
        <View style={[menuStyle, styles.menu]}>
          <TouchableOpacity onPress={this.pressMe.bind(this)}>
            <Image source={this.state.currentMenuIcon} style={styles.image}/>
          </TouchableOpacity>
          {this.state.isPressed ? ( animations ) : null}
        </View>
      );
    };


    const CustomTabView = ({ router, navigation }) => {
      // console.log('first')
      const { routes, index } = navigation.state;
      const ActiveScreen = router.getComponentForRouteName(routes[index].routeName);
      return (
        <View style={styles.tabContainer}>
          <CustomTabBar navigation={navigation}/>
          <ActiveScreen
            navigation={addNavigationHelpers({
              dispatch: navigation.dispatch,
              state: routes[index],
            })}
            screenProps={{}}
          />
        </View>
      );
    };

    const CustomTabRouter = TabRouter(
      this.state.customTabRouter,
      {
        initialRouteName: this.state.currentPage,
      }
    );

    const CustomTabs = createNavigationContainer(
      createNavigator(CustomTabRouter)(CustomTabView)
    );

    return (
      <CustomTabs/>
    )
  }
}

class CustomPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
}


const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    width: D_WIDTH,
  },
  menu: {
    position: 'absolute',
    zIndex: 100,
  },
  tab: {
    marginTop: 50
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  }
});

export {
  CustomNavigation,
  CustomPage
}
// export default CustomNavigation;
