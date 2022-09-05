/**
 * React Native Tasks App
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, useColorScheme} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text>Hello 👋🏻</Text>
      <Text>ColourScheme - {useColorScheme()} </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
