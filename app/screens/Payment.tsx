import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from "react-native";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { addFavourite, increment, decrement } from "../redux/CategoriesSlice";
import Color from "../constant/Color";
import OrderScreenStyle from "./Style/OrderScreenStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const OrderScreen = ({navigation}:any) => {

    const cart = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();
    const favouriteHandler = (item:any) => {
        dispatch(addFavourite(item.id))
    }

    const data = cart.filter((item:any) => {
        if(item.count >= 1){
            return item
        }
    })
    console.log(data)

    const total = data.map((item:any) => {
        return item.price * item.count
    })
    
    let sum = 0;
    for(let i=0; i<total.length; i++){
        sum += total[i]
    }

    var tax = 10;
    const Percentage = (tax/100) * sum;
    const finalAmount = sum + Percentage

    const totalItem = data.length

    const getOrder = async () => {
        let user = await AsyncStorage.getItem('email');
        const name:any = user?.substring(0, user.indexOf('@'));
        console.log(name)
        axios.post(`https://groceryapp-4d2f8-default-rtdb.firebaseio.com/Orders/${name}.json`,data)
        .then(async res => {
          if(res.data){
            // console.log(res.data) 
            navigation.navigate('OrderSuccessScreen')
          }
          else{
            Alert.alert("InValid!!!!", 'usre is not addded....');
          }
        })
        .catch((e:any) => {
          Alert.alert("Authentication Failed");
        })
      }
    
        return(
        <View style={OrderScreenStyle.totalPriceView}>
        <View style={{flexDirection: 'row', marginTop: 10,justifyContent:'space-between',marginHorizontal:10}}>
        <Text style={OrderScreenStyle.totalAmountText}>Total Amount</Text>
        <Text style={OrderScreenStyle.totalAmount}>{sum}</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent:'space-between',marginHorizontal:10}}>
        <Text style={OrderScreenStyle.totalAmountText}>Tax Charge </Text>
        <Text style={OrderScreenStyle.totalAmount}>5%</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent:'space-between',marginHorizontal:10}}>
        <Text style={OrderScreenStyle.totalAmountText}>Shipping</Text>
        <Text style={OrderScreenStyle.totalAmount}>FREE</Text>
        </View>
        <View style={{flexDirection: 'row',justifyContent:'space-between',marginHorizontal:10}}>
        <Text style={OrderScreenStyle.totalAmountText}>Total Item</Text>
        <Text style={OrderScreenStyle.totalAmount}>{totalItem}</Text>
        </View>
        <Text style={{marginLeft: 14,color: Color.PrimaryWhite}}>---------------------------------------------------------------------------------------</Text>
        <View style={{flexDirection: 'row',justifyContent:'space-between',marginHorizontal:10}}>
        <Text style={OrderScreenStyle.totalAmountText}>Total </Text>
        <Text style={OrderScreenStyle.totalAmount}>${finalAmount}</Text>
        </View>
        <TouchableOpacity style={OrderScreenStyle.paymentBtn} onPress={() => getOrder()}>
        <Text style={OrderScreenStyle.paymentText}>Payment</Text>
        </TouchableOpacity>
        </View>
    );
} 
        
export default OrderScreen;