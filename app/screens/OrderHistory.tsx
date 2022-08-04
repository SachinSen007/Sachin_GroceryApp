

import React, { useEffect, useState } from "react";
import { View, Text, Alert, FlatList, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import OrderHistoryStyle from "./Style/ OrderHistoryStyle";
import { useNavigation } from "@react-navigation/native";
import { getOrders } from "../redux/CategoriesSlice";
import { useAppSelector, useAppDispatch } from "../redux/hook";

const OrderHistory = () => {

    const [orderData, setOrderData]:any = useState([]);
    const  navigation:any = useNavigation();
    const dispatch = useAppDispatch();
    const orderDetails = useAppSelector((state:any) => state.orders);
    console.log("stccccccccc",orderData);
    

    useEffect(() => {
        getAllOrderSummary();
    },[orderDetails])

    const getAllOrderSummary = async () => {
        let user = await AsyncStorage.getItem('email');
        const result = user?.substring(1, user.indexOf('@'));
        console.log("fireeeeee",result);
        
        axios.get(`https://groceryapp-2a12e-default-rtdb.firebaseio.com/Orders/${result}.json`)
        
        .then((response) => {
            const allData:any = [];
            console.log("powerrrrr",result);
            
            
            for(const key in response.data){
                const orderObj:any = {
                    id: key,
                    products: response.data[key].products,
                    name: response.data[key].products[0].name,
                    image: response.data[key].products[0].image,
                    amount: response.data[key].amount,
                    tax: response.data[key].tax,
                    total: response.data[key].total,
                    date: response.data[key].date,
                    totalItems: response.data[key].totalItems
                }
                allData.push(orderObj)
                //console.log(allData);
                
            }
            setOrderData(allData)
            dispatch(getOrders(allData))
        })
        .catch((e) => {
            Alert.alert("warning!!!!", "authentication failed....")
        });
    }

   const detailsHandler = (id:any) => {
    const orderId = orderDetails.find((i:any) => i.id === id)
    navigation.navigate('OrderHistoryDetailScreen',{data: orderId})
   }

    return(
        <View style={{flex: 1, top: 10}}>
        <Text style={OrderHistoryStyle.heading}>Your Order History</Text>
        <FlatList
        data={orderDetails}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}:any) => {
            const result = item.id?.substring(1,8);
            return(
                <TouchableOpacity activeOpacity={0.4} onPress={() => detailsHandler(item.id)}>
                <View style={OrderHistoryStyle.screen}>
                <View style={OrderHistoryStyle.detailsContainer}>
                <View style={{flexDirection: 'row'}}>
                <Text style={OrderHistoryStyle.orderIdText}>Order Id: </Text>
                <Text style={OrderHistoryStyle.orderId}>#{result}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={OrderHistoryStyle.orderDateText}>Order Date: </Text>
                <Text style={OrderHistoryStyle.orderDate}>{item.date}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Image source={{uri: item.image}} style={OrderHistoryStyle.image}/>
                <View style={{marginLeft: 4, top: 10}}>
                <Text style={OrderHistoryStyle.name}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={OrderHistoryStyle.finalAmountText}>Total Amount: </Text>
                <Text style={OrderHistoryStyle.finalAmount}>{item.total}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <Text style={OrderHistoryStyle.finalAmountText}>Total Items : </Text>
                <Text style={OrderHistoryStyle.finalAmount}>{item.totalItems}</Text>
                </View>
                </View>
                </View>
                </View>
                </View>
                </TouchableOpacity>
            );
        }}
        />
        </View>
    );
}

export default OrderHistory;


