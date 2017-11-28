import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class FourthPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Fourth Page
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
