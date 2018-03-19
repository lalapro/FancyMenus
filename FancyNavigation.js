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
import { CustomNavigation, CustomPage } from './CustomNavigation';

const {height, width} = Dimensions.get('window');




class FancyNavigation extends CustomNavigation {
  constructor(props){
    super(props)
    this.state = Object.assign(this.state, {
      radius: this.props.radius
    })
  }

  componentWillMount() {
    this.createCustomRouter(this.props.children);
    this.createCustomIconArray(this.props.children);

  }

  createPositions(num) {
    let fannedPositions = [];
    for (let i = 1; i <= num; i++) {
      let angle = 180 / (num + 1) * i;
      let radians = angle * (Math.PI / 180);
      var x = this.state.radius * Math.sin(radians);
      var y = this.state.radius * Math.cos(radians);
      fannedPositions.push({
        position: 'absolute',
        top: -Math.round(x),
        left: -Math.round(y),
        zIndex: 100
      })
    }
    this.setState({fannedPositions})
  }

  returnAnimate(routes, navigation) {
    return routes.map((route, i) => {
      return (
        <Animated.View key={i} style={{opacity: this.state.animatedValue[i]}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(route.routeName)
              this.changeCurrentPage(i)
            }}
            style={[
              this.state.fannedPositions[i],
              {
                transform: [{
                  translateY: this.state.animatedValue[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: [40, 0]
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




}




const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  }
});

export {
  FancyNavigation,
  CustomNavigation,
  CustomPage
}
