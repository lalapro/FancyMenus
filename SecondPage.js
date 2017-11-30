import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class SecondPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Second Page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
