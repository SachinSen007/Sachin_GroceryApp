
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import validateInput from "../helper/Validation";
import Languages from "../config/Languages";
import Color from "../constant/Color";
import HomeScreen from "./HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
                    await AsyncStorage.setItem('email', JSON.stringify(res.data.email));
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

