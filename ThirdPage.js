import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ThirdPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Third Page
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
