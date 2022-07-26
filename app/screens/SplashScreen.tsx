import React from 'react';
import {  StyleSheet, Text, View,Image, StatusBar,TouchableOpacity } from 'react-native';
import SplashImage from '../assets/SplashImage.jpg';




export default function SplashScreen({navigation}) {
 
  return (
    <View style={styles.container}>
      <StatusBar hidden={true}/>

      <View style={styles.logoContainer}>
      
      <Image source={SplashImage} style={styles.logo}/>
      </View>
       <Text style={styles.text}>Welcome{'\n'}to Your Grocer</Text>
       <Text style={styles.bottomText}>Choose anything from daily essentials{'\n'}from grocery store to home delivery</Text>
      
       <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('SignIn')}
      >
        <Text style={styles.signin}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity  onPress={()=> navigation.navigate('RegisterScreen')}>
        <Text style={styles.register} >Register</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  )
}
const styles = StyleSheet.create({

  container:{
    backgroundColor:'#fff',
    flex: 1,
    //justifyContent:'space-around',
    alignItems:'center'
},

  logoContainer:{
    alignItems:'center',
    marginBottom:30,
  },

  logo:{
    height:400,
    width:400,
   //resizeMode:'cover', 
   //alignSelf:'stretch'
},

  text:{
      color:'black',
      fontSize:30,
      fontWeight:'bold',
      textAlign:'center'
  },

  bottomText:{
    color:'#999999',
    fontSize:19,
    marginTop:20,
    textAlign:'center'
    
    
  },

  text1:{
    color:'black',
    fontSize:30,
    fontWeight:'bold'
    //margin:30
  },

  textContainer:{
    alignItems:'center',
    margin:30,
    
  },

  button: {
    alignItems: "center",
    backgroundColor: "#7EC245",
    padding: 10,
    height:50,
    width:150,
    borderRadius:20,
    marginTop:30
  },

  signin:{
    color:'#f8f8ff',
    fontSize:20,
  },

  registerContainer:{
      alignItems:'center',
      flexDirection:'row',
      marginTop:10
  },

  registerText:{
    color:'#999999'
  },

  register:{
    color:"#7EC245",
    marginLeft:10,
  }
});


