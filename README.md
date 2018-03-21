## What it does:

Create simple navigation menus with your own personalized icons and style!


## Install
```jsx
npm install react-native-custom-menus
```


## Custom Menu
```jsx
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { FancyNavigation, CustomNavigation, CustomPage } from 'react-native-custom-menus';

export default class MyDrawer extends React.Component {
  render() {
    return (
      <CustomNavigation
        icon={{uri: 'https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png'}}
        style={styles.menu}
      >
        <CustomPage path={FirstPage} icon={require(`./assets/pic1.png`)}/>
        <CustomPage path={SecondPage} icon={require(`./assets/pic2.png`)}/>
      </CustomNavigation>
    )
  }
}
```
<img src="https://i.imgur.com/hFr9Wmb.gif" alt="Normal" style="width: 200px;"/>


## Fancy Menu
```jsx
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import { FancyNavigation, CustomNavigation, CustomPage } from 'react-native-custom-menus';

export default class MyDrawer extends React.Component {
  render() {
    return (
      <FancyNavigation
        icon={{uri: 'https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-512.png'}}
        style={styles.menu}
        radius={100}
      >
        <CustomPage path={FirstPage} icon={require(`./assets/pic1.png`)}/>
        <CustomPage path={SecondPage} icon={require(`./assets/pic2.png`)}/>
      </FancyNavigation>
    )
  }
}
```
<img src="https://i.imgur.com/oBEliwE.gif" alt="Fancy" style="width: 200px;"/>


## Rendering the Drawer

```jsx
import MyDrawer from './MyDrawer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MyDrawer/>
      </View>
    )
  }
}
```
