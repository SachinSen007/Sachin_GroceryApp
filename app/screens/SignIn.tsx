// // import React from "react";
// // import{ Image, StyleSheet, Text, TextInput, View, TouchableOpacity }from 'react-native'

// // function loginHandler(){

// // }
// // const Login = ()=>{
// //     return(
// //         <View style={styles.container}>
            
// //             <Image source={require('../assets/register.jpg')} style={styles.img}/>
// //             <Text style={styles.text}>Login</Text>
// //             <View>
// //             {/* <TextInput placeholder="Email...." style={styles.input1}/> */}
// //             <TextInput placeholder="Email" style={styles.input1} placeholderTextColor="#000"/>
// //             <TextInput placeholder="password" style={styles.input2} placeholderTextColor="#000"/>
// //             <Text style={{marginLeft:230,marginTop:20,fontSize:15,color:'green'}}>Forgot password?</Text>
// //             <TouchableOpacity onPress={()=>loginHandler}>
// //             <Text style={styles.btn}>Login</Text>
// //             </TouchableOpacity>
// //             <Text style={{textAlign:'center',marginTop:20,fontSize:15,color:'green' }}>Not registered yet? </Text>
// //             <Text style={{textAlign:'center',
// //                   marginTop:20,
// //                   fontSize:20,
// //                   color:'green' ,
// //                   textDecorationLine: 'underline',fontWeight:'bold'}}>Create your account </Text>
// //             </View>
// //             <View  style={{flexDirection:'row',marginLeft:160,marginTop:30,justifyContent:'space-between'}}>
// //             {/* <MaterialCommunityIcons name='facebook'  size={24} color='#0165E1'/>
// //             <MaterialCommunityIcons name='google' size={24} style={styles.google}/> */}
// //             </View>
// //         </View>
// //     )

// // }
// // const styles = StyleSheet.create({
// //     img:{
// //         width:393,
// //         height:200,
// //         position:'absolute'
        
// //         //marginLeft:1,
       
       
        
// //     },
// //     container:{
// //         flex:1,
// //         backgroundColor:"white"
// //     },
// //     text:{
// //         marginLeft:150,
// //         fontSize:30,
// //         fontWeight:'bold',
// //         color:'green',
// //         marginTop:250,
// //         //alignItems:'center',
// //         //justifyContent:'center'
        
// //     },
// //     input1:{
       
// //         height:50,
// //         width:350,
// //         borderWidth:2,
// //         borderColor:'green',
// //         borderRadius:15,
// //         marginTop:50,
// //         marginLeft:15,
        
        
        
// //         },
// //     input2:{
// //         height:50,
// //         width:350,
// //         borderWidth:2,
// //         borderColor:'green',
// //         borderRadius:15,
// //         marginTop:20,
// //         marginLeft:15

// //     },
// //     btn:{
// //         marginTop:45,
// //         textAlign:'center',
// //         backgroundColor:'green',
// //         marginHorizontal:18,
// //         padding:13,
// //         borderRadius:15,
// //         color:'white',
// //         justifyContent:'center'
// //     },
// //     google:{
// //         marginRight:150,
        
// //     }

// // })
// // export default Login;



import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import validateInput from "../helper/Validation";
import Languages from "../config/Languages";
import Color from "../constant/Color";
import HomeScreen from "./HomeScreen";

const SignIn = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNotValid, setIsValid] = useState(false);
    const [isLoading, setLoader] = useState(false);
    const [errorPassword, setErrorPassword] = useState(
        Languages.errorValidPassword,
    );
    const [placeHolderColor, setPlaceholderColor] = useState(
        Color.PrimaryLigthGreen,
    );

    const onValueChanged = (value: string) => {
        setEmail(value);
        if (value == '') {
            setIsValid(false);
            setPlaceholderColor(Color.PrimaryLigthGreen);
        }
    };

    const onValueChangedPassword = (value: any) => {
        setPassword(value);
        if (value === '') {
            console.log('enter password');
            setIsValid(false);
            setPlaceholderColor(Color.PrimaryLigthGreen);
        }
    };

    const validateField = () => {
        setPlaceholderColor(Color.PrimaryLigthGreen);
        setIsValid(false);
        setLoader(false);
        if (validateInput.emptyValue(password)) {
            setPlaceholderColor(Color.PrimaryLigthGreen);
            return true;
        } else if (!validateInput.passwordValidator(password)) {
            setIsValid(true);
            setErrorPassword(Languages.errorValidPassword);
            return true;
        }
        return false;
    };

    const fetchApiCall = () => {
        if (validateField()) {
            if (!isLoading) setLoader(true);
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBliVH7L8XIR2ZYyr_CG5LX63oVtYxBN0w',
                { email, password }
            ).then(async res => {
                if (res) {
                    navigation.navigate('HomeScreen');
                    setEmail('');
                    setPassword('');
                    console.log(email)


                        ;
                    console.log(password);
                } else {
                    Alert.alert("UnAuthorized");
                }
            })
                .catch((e: any) => {
                    Alert.alert('Authentication Failed', "Please Enter Valid Data");
                    setLoader(false);
                });
        }
    }

    


    return (
        <View style={styles.container}>

            <Image source={require('../assets/Login.jpg')} style={styles.img} />
            <Text style={styles.text}>Login</Text>
            <View>
                <TextInput
                    placeholder="Email...."
                    style={styles.input1}
                    //style={{color: '#000000',}}
                    onChangeText={text => onValueChanged(text)}
                    value={email}
                    placeholderTextColor="#000"
                    
                    
                    />
                <TextInput
                    placeholder="password"
                    style={styles.input2}
                    onChangeText={text => onValueChangedPassword(text)}
                    value={password}
                    placeholderTextColor="#000" 
                    />
                <Text style={{ marginLeft: 230, marginTop: 20, fontSize: 15, color: 'green' }}>Forgot password?</Text>
                <Text style={styles.btn} onPress={fetchApiCall}>Login</Text>
                <Text style={{textAlign:'center',marginTop:20,fontSize:15,color:'green' }}>Not registered yet? </Text>
                <Text style={{textAlign:'center',
                  marginTop:20,
                  fontSize:20,
                   color:'green' ,
                   textDecorationLine: 'underline',fontWeight:'bold'}}>Create your account </Text>
                
                
            </View>
            {/* <View style={{ flexDirection: 'row', marginLeft: 160, marginTop: 30, justifyContent: 'space-between' }}>
                <MaterialCommunityIcons name='facebook' size={24} color='#0165E1' />
                <MaterialCommunityIcons name='google' size={24} style={styles.google} />
                
            </View> */}
        </View>
    )

}
const styles = StyleSheet.create({
    img:{
        width:393,
        height:200,
        position:'absolute'
        
        //marginLeft:1,
       
       
        
    },
    container:{
        flex:1,
        backgroundColor:"white"
    },
    text:{
        marginLeft:150,
        fontSize:30,
        fontWeight:'bold',
        color:'green',
        marginTop:250,
        //alignItems:'center',
        //justifyContent:'center'
        
    },
    input1:{
       
        height:50,
        width:350,
        borderWidth:2,
        borderColor:'green',
        borderRadius:15,
        marginTop:50,
        marginLeft:15,
        color: '#000'
        
        
        
        },
    input2:{
        height:50,
        width:350,
        borderWidth:2,
        borderColor:'green',
        borderRadius:15,
        marginTop:20,
        marginLeft:15,
        color: '#000'

    },
    btn:{
        marginTop:45,
        textAlign:'center',
        backgroundColor:'green',
        marginHorizontal:18,
        padding:13,
        borderRadius:15,
        color:'white',
        justifyContent:'center',
        
    },
    google:{
        marginRight:150,
        
    }

})
export default SignIn;

// import React,{useState}from "react";
// import {View,Text, TextInput,Image,TouchableOpacity, Alert,ScrollView,StyleSheet} from "react-native";
// import Color from "../constant/Color";
// import Languages from "../config/Languages";
// import validateInput from "../helper/Validation";
// import axios from "axios"
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const SignIn = ({navigation}:any) => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isNotValid, setIsValid] = useState(false);
//     const [isLoading, setLoader] = useState(false);
//     const [errorPassword, setErrorPassword] = useState(
//       Languages.errorValidPassword,
//     );
//     const [placeHolderColor, setPlaceholderColor] = useState(
//         Color.PrimaryLigthGreen,
//     );
  
//     const onValueChanged = (value: string) => {
//       setEmail(value);
//       if (value == '') {
//         setIsValid(false);
//         setPlaceholderColor(Color.PrimaryLigthGreen);
//       }
//     };
  
//     const onValueChangedPassword = (value: any) => {
//       setPassword(value);
//       if (value === '') {
//         console.log('enter password');
//         setIsValid(false);
//         setPlaceholderColor(Color.PrimaryLigthGreen);
//       }
//     };
  
//     const validateField = () => {
//       setPlaceholderColor(Color.PrimaryLigthGreen);
//       setIsValid(false);
//       setLoader(false);
//       if (validateInput.emptyValue(password)) {
//         setPlaceholderColor(Color.PrimaryLigthGreen);
//         return true;
//       } else if (!validateInput.passwordValidator(password)) {
//         setIsValid(true);
//         setErrorPassword(Languages.errorValidPassword);
//         return true;
//       }
//       return false;
//     };
  
//   const onSubmit = () => {
//         if (validateField()) {
//             if(!isLoading) setLoader(true);
//             axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBliVH7L8XIR2ZYyr_CG5LX63oVtYxBN0w',
//             {email,password}
//             ).then(async res => {
//                 if (res) {
//                   await AsyncStorage.setItem('idToken',res.data.idToken);
//                   navigation.navigate('DashboardScreen');
//                   setEmail('');
//                   setPassword('');
//                   console.log(email)

// ;
//                   console.log(password);
//                 } else {
//                   Alert.alert("UnAuthorized");
//                 }
//               })
//               .catch((e: any) => {
//                 Alert.alert('Authentication Failed',"Please Enter Valid Data");
//                 setLoader(false);
//               });
//           }
//     }

// return(
//   <View style={styles.root}>
//   <ScrollView>
//   <Image source={require('../assets/Login.jpg')} style={styles.img}/>
//   <View style={styles.infoContainer}>
//   <Text style={styles.loginText}>WelCome, {"\n"}Login Now....</Text>
//   <TextInput placeholder="Email" style={styles.textInput} placeholderTextColor={Color.PrimaryLigthGreen} onChangeText={onValueChanged} value={email}/>
//   <TextInput placeholder="Password" style={styles.textInput} placeholderTextColor={Color.PrimaryLigthGreen} secureTextEntry={true} onChangeText={onValueChangedPassword} maxLength={8} value={password}/>
//   <TouchableOpacity style={styles.signinBtn}>
//   <Text style={styles.btnText} onPress={onSubmit}>Sign in</Text>
//   </TouchableOpacity>
//   </View>
//   </ScrollView>
//   </View>
// );
// }


// const styles = StyleSheet.create({

//     root: {
//         flex: 1,
//         backgroundColor: Color.PrimaryWhite
//     },
//     infoContainer: {
//         flex: 1,
//         alignItems: 'flex-start',
//         marginVertical: 20,
//         marginTop: 20,
//     },
//     loginText: {
//         fontSize: 25,
//         color: Color.PrimaryLigthGreen,
//         marginBottom: 20,
//         paddingLeft: 20,
//     },
//     textInput: {
//         height: 50,
//         width: '90%',
//         borderWidth: 2,
//         borderRadius: 30,
//         borderColor: Color.PrimaryLigthGreen,
//         marginHorizontal: 20,
//         padding: 14,
//         fontSize: 16,
//         color: Color.PrimaryLigthGreen,
//         marginTop: 20,
//     },
//     signinBtn: {
//         height: 50,
//         width: 140,
//         borderRadius: 30,
//         backgroundColor: Color.PrimaryLigthGreen,
//         alignSelf: 'center',
//         marginTop: 30,
//         elevation: 5,
//     },
//     btnText: {
//         fontSize: 18,
//         color: Color.PrimaryWhite,
//         textAlign: 'center',
//         fontWeight: 'bold',
//         padding: 10
//     },
//     img: {
//         height: 300,
//         width: 400,
//         alignSelf: 'flex-end',
//         marginTop: 20
//     }
// })

// export default SignIn;
