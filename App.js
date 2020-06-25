import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Regform from './app/components/Regform';

export default class App extends React.Component {
  render() {
      return (
        <View style={styles.container}>
          <Regform />
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : '#B96C55',
    paddingLeft : 60,
    paddingRight : 60,
  },
});
