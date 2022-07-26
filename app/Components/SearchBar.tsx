import React from 'react';
import {StyleSheet, TextInput, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from '../constant/Color';

const SearchBar = ({onPressIn}:any) => {
    return(
    <>
    <TextInput style={styles.textInput} placeholder='Search....'
    placeholderTextColor={Color.PrimaryLigthGray} onPressIn={onPressIn}/>
    <MaterialCommunityIcons name= 'format-list-bulleted' color={Color.PrimaryWhite} size={25} style={styles.icon}/>
    </>
    );   
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        marginTop: 25,
        padding: 8,
        borderRadius: 20,
        height: 40,
        width: 40,
        marginLeft: 330,
        backgroundColor: Color.PrimaryLigthGreen,
    },
    textInput: {
        height: 50,
        marginTop: 20,
        marginHorizontal: 14,
        borderRadius: 30,
        paddingLeft: 10,
        fontSize: 16,
        backgroundColor: Color.PrimaryWhite,
        color:'black',
        elevation: 6
    }
});
export default SearchBar;