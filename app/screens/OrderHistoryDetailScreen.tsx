import React from "react";
import { FlatList, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import OrderDetailsStyle from "./Style/OrderDetailsStyle ";
import Color from "../constant/Color";

const OrderHistoryDetailScreen = () => {
    const route:any = useRoute();

    const items = route.params.data

    return(
       <View style={{flex: 1, marginTop: 40}}>
       <FlatList
       data={items.products}
       renderItem={({item}:any) => {
        return(
                <View style={OrderDetailsStyle.detailsContainer}>
                <Image source={{uri: item.image}} style={OrderDetailsStyle.image}/>
                <View style={{paddingHorizontal: 10}}>
                <Text style={OrderDetailsStyle.name}>{item.name}</Text>
                <Text style={OrderDetailsStyle.units}>{item.units}</Text>
                <Text style={OrderDetailsStyle.price}>{item.price*item.count}$</Text>
                <Text style={OrderDetailsStyle.count}>Total Quantity: {item.count}</Text>
                </View>
                </View>
        );
       }}
       />
       <View style={OrderDetailsStyle.priceContainer}>
       <View style={{flexDirection: 'row', marginTop: 10}}>
       <Text style={OrderDetailsStyle.totalAmountText}>Total Amount :</Text>
       <Text style={OrderDetailsStyle.totalAmount}>${items.amount}</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={OrderDetailsStyle.totalAmountText}>Tax Charges :</Text>
       <Text style={OrderDetailsStyle.totalAmount}>{items.tax}%</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={OrderDetailsStyle.totalAmountText}>Shipping :</Text>
       <Text style={OrderDetailsStyle.totalAmount}>FREE</Text>
       </View>
       <View style={{flexDirection: 'row'}}>
       <Text style={OrderDetailsStyle.totalAmountText}>Total Item :</Text>
       <Text style={OrderDetailsStyle.totalAmount}>{items.totalItems}</Text>
       </View>
       <Text style={{marginLeft: 14,color: Color.PrimaryLigthGray}}>___________________________________</Text>
       <View style={{flexDirection: 'row'}}>
       <Text style={OrderDetailsStyle.totalAmountText}>Total Payment :</Text>
       <Text style={OrderDetailsStyle.totalAmount}>${items.total}</Text>
       </View>
       </View>
       </View>
    );
}

export default OrderHistoryDetailScreen;