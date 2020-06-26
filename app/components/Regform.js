import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function App() {
  return (


    <View style={styles.regform}>

    <Image style={styles.logo}
            source={require('../../assets/icon/crink-logo-white.png')} />
       
            <Text style={styles.header}>Inscription</Text>

            <TextInput style={styles.textinput} placeholder="Votre Nom d'utilisateur " 
            placeholderTextColor="#ffffff"/>

            <TextInput style={styles.textinput} placeholder="Email" 
            placeholderTextColor="#ffffff"/>

            <TextInput style={styles.textinput} secureTextEntry="true" placeholder="Mot de Passe" 
            placeholderTextColor="#ffffff"/>

            <TextInput style={styles.textinput} secureTextEntry="true" placeholder="Confirmation de Mot de passe" 
            placeholderTextColor="#ffffff"/>

            <TouchableOpacity style={styles.button}> 
                <Text style={styles.btntext}>S'inscrire </Text>
            </TouchableOpacity>
      
    </View>

  );
}

const styles = StyleSheet.create({


regform: {
    alignSelf : 'stretch',
    alignItems: 'center',
  },

header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom : 10,
    marginBottom : 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

textinput: {
    alignSelf : 'stretch',
    height :  40,
    marginBottom :30,
    color: "#ffffff",
    borderColor: '#f8f8f8',
    borderWidth: 1,
    alignItems: 'center',
    paddingLeft: 5,
  },

button: {
      alignSelf:'stretch',
      alignItems: 'center',
      padding : 20,
      backgroundColor: '#ffffff',
      marginTop:3,
  },
btntext:{
      color:'#000000',
      fontWeight:'bold',
  },

logo:{
    width : 160,
    height: 50,
    marginBottom : 20,
  }
});