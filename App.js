import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Regform from './app/components/Regform';

export default class App extends React.Component {
  render() {
      return (
        <ImageBackground 
          source={require('./assets/img/girl.jpg')}
          style={styles.imgbg}>

          <View style={styles.bgcontainer}>

            <View style={styles.container}>
              <Regform />
            </View>

          </View>
          
        </ImageBackground>
      );
    }
  }

const styles = StyleSheet.create({
  bgcontainer : {
    flex: 1,
    backgroundColor: 'rgba(47, 163, 218, .4)',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft : 60,
    paddingRight : 60,
  },
imgbg : {
  flex : 1,
  width : '100%',
  height : '100%',
}

});
