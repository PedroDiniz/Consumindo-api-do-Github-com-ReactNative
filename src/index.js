import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('I<3REACT');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>HELLO</Text>
    </View>
  );
}
