import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import Color from "../constant/Color";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const CategoriesIcon = ({category,name,color,size,onPress}:any) => {


    return(
            <View>
            <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <MaterialCommunityIcons name={name} color={color} size={size} onPress={onPress}/>
            </TouchableOpacity>
            <Text style={styles.text}>{category}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
   
    text: {
        textAlign: 'center'
    },
    container: {
        backgroundColor: Color.PrimaryLigthGreen,
        height: 52,
        width: 52,
        borderRadius: 25,
        margin: 11,
        padding: 10,
        elevation: 6,
    },
    back: {
        backgroundColor: Color.PrimaryLigthGray,
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 11,
        padding: 10,
        elevation: 6,
    }
})
export default CategoriesIcon;