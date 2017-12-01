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




class CustomNavigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      customTabRouter: {},
      customIcons: [],
      isPressed: false,
      currentPage: 0,
      currentMenuIcon: props.icon,
      animatedValue: [],
      inverse: true,
      dropZoneValues: null
    }

  }

  componentWillMount() {
    this.createCustomRouter(this.props.children);
    this.createCustomIconArray(this.props.children);
  }

  setDropZoneValues(event) {      //Step 1
    this.setState({
      dropZoneValues : event.nativeEvent.layout
    }, () => {
      if (this.createPositions) {
        this.createPositions(this.props.children.length);
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isPressed !== nextState.isPressed
  }

  reset() {
    this.state.customIcons.forEach((a, i) => {
      this.state.animatedValue[i] = new Animated.Value(0)
    })
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
    screens.forEach((child, i) => {
      customIcons.push(child.props.icon)
    })
    this.setState({customIcons}, () => this.reset());
  }

  pressMe() {
    console.log(this.state)
    this.setState({ isPressed: !this.state.isPressed }, () => {
      this.state.isPressed ? this.animate(1) : this.animate(0);
    })
  }

  changeCurrentPage(currentPage) {
    currentPage = currentPage.toString();
    this.setState({currentPage})
  }

  animate(value) {
    const animations = this.state.animatedValue.map((item, i) => {
      return Animated.spring(
        this.state.animatedValue[i],
        {
          toValue: value,
          speed: 12,
          bounciness: 12,
          useNativeDriver: true
        }
      )
    })
    Animated.parallel(animations).start()
  }

  returnAnimate(routes, navigation) {
    return routes.map((route, i) => {
      // console.log(this.state)
      return (
        <Animated.View key={i} style={{opacity: this.state.animatedValue[i]}}>
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
                    outputRange: [-90, 0]
                  })
                }]
              }]}
              key={route.routeName}
              >
                <Image source={this.state.customIcons[i]} style={styles.image}/>
              </TouchableOpacity>
            </Animated.View>
          )}
        )
  }

  render() {
    const CustomTabBar = ({ navigation }) => {
      const menuStyle = this.props.style
      const { routes } = navigation.state;


      return (
        <View style={[menuStyle, styles.menu]} onLayout={this.setDropZoneValues.bind(this)}>
          <TouchableOpacity onPress={this.pressMe.bind(this)}>
            <Image source={this.state.currentMenuIcon} style={styles.image}/>
          </TouchableOpacity>
          {this.state.animatedValue.length > 0 ? this.returnAnimate(routes, navigation) : null}
        </View>
      );
    };


    const CustomTabView = ({ router, navigation }) => {
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
    width: "100%",

  },
  menu: {
    position: 'absolute',
    zIndex: 100,
  },
  tab: {
    marginTop: 20
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  }
});

export  {
  CustomNavigation,
  CustomPage
}
