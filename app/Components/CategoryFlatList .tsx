import React, { useState } from "react";
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity,Alert } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppSelector, useAppDispatch } from "../redux/hook";
import Color from "../constant/Color";
import CategoryFlatListStyle from "../screens/CategoryFlatListStyle";
import { increment, decrement, addFavourite } from "../redux/CategoriesSlice";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CategoriesSlice from "../redux/CategoriesSlice";


const CategoryFlatList = ({data,selectcat}:any) =>{

    const navigation:any = useNavigation();
    const favouriteList = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();

    // const favouriteHandler = (item:any) => {
    //     dispatch(addFavourite(item.id))
    // }


    const deleteHandler = async (item:any) => {
        let user = await AsyncStorage.getItem('email');
        const result = user?.substring(0, user.indexOf('@'));
        console.log("result",result);
        
        axios.delete(`https://groceryapp-2a12e-default-rtdb.firebaseio.com/favourites/${result}/${item.favouriteId}.json`)
        .then(res => {
            dispatch(addFavourite({p_id: item.id, favouriteId: '' }))
        }).catch((error) => {
            Alert.alert("Alert!!!!","Authentication Failed");
        })
      }
      

    const favouriteHandler = async(item:any) => {
        let user = await AsyncStorage.getItem('email');
        const result = user?.substring(0, user.indexOf('@'));
        console.log("RESULT", result);
        axios.post(`https://groceryapp-2a12e-default-rtdb.firebaseio.com/favourites/${result}.json`,{p_id: item.id})
        .then(async res => {
            console.log(res.data);
            
          if(res.data){
            dispatch(addFavourite({p_id: item.id, favouriteId: res.data.name}))
          }
          else{
            Alert.alert("InValid!!!!", 'usre is not addded....');
          }
        })
        .catch((e:any) => {
          Alert.alert("Authentication Failed");
        })
      }

    const detailHandler = (id:any) => {
        const product:any = favouriteList.find((p:any) => p.id === id);
        if('id' in product) {
            navigation.navigate('DetailScreen',{name: product.name, price: product.price, description: product.description, units: product.units, count: product.count, image: product.image, id: product.id, categoriesname: product.categoriesname, images:product.images});
        }
        else {
            console.log("Sachin Sen")
        }
    }

    return(
        <FlatList 
        data={selectcat
            ? data.filter((catItem:any) => {
                if (catItem.categoriesname === selectcat) {
                  return catItem;
                }
              })
            : data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle = {{paddingBottom: 320,marginHorizontal: 8}}
        renderItem={({item}:any) => {
            return(
                <TouchableOpacity activeOpacity={0.4} onPress={() => detailHandler(item.id)}>
                <View style={CategoryFlatListStyle.itemContainer}>
                <MaterialCommunityIcons name={item.isFavourite ? 'heart' : 'heart-outline'} color={Color.PrimaryLigthGreen} size={24} style={{padding: 10, alignSelf: 'flex-end'}} onPress={() => {item.isFavourite ? deleteHandler(item) : favouriteHandler(item)}} />
                <Image source={{uri: item.image}} style={CategoryFlatListStyle.itemImages}/>
                <Text style={CategoryFlatListStyle.nameText}>{item.name}</Text>
                <Text style={CategoryFlatListStyle.unitText}>{item.units}</Text>
                <View style={{flexDirection: 'row',marginTop: 4,justifyContent: 'space-between'}}>
                <Text style={CategoryFlatListStyle.priceText}>{item.price}$</Text>
                {item.count > 0 ?<View style={styles.counterStyle}>
                <MaterialCommunityIcons name="minus" color={Color.PrimaryLigthGray} size={20} style={CategoryFlatListStyle.minusIcon} onPress={() => dispatch(decrement(item.id))}/>
                <Text style={{fontSize: 16 ,color:'red'}}>{item.count}</Text>
                <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
                <MaterialCommunityIcons name="plus" color={Color.PrimaryWhite} size={20} style={CategoryFlatListStyle.plusIcon}/>
                </TouchableOpacity>
                </View> :
                <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
                <MaterialCommunityIcons name="plus" color={Color.PrimaryWhite} size={20} style={CategoryFlatListStyle.plusSimpleIcon}/>
                </TouchableOpacity>}
                </View>
                </View>
                </TouchableOpacity>
            );
        }}
        />
    );
}

const styles = StyleSheet.create({
    flatStyle: {
        overflow: 'visible',
        // marginBottom: 320,
        marginHorizontal: 8
    },
    counterStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 26,
        width: 66,
        borderWidth: 1,
        borderColor: Color.PrimaryLigthGray,
        marginRight: 10,
        borderRadius: 20
    }
})
export default CategoryFlatList;