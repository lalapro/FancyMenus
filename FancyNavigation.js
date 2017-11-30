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
    this.state = super.state


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


}




const styles = StyleSheet.create({
  tab: {
    position: 'relative',
    left: -50
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  }
});

export {
  FancyNavigation,
  CustomPage
}
