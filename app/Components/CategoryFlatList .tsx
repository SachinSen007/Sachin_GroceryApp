import React, { useState } from "react";
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppSelector, useAppDispatch } from "../redux/hook";
import Color from "../constant/Color";
import CategoryFlatListStyle from "../screens/CategoryFlatListStyle";
import { increment, decrement, addFavourite } from "../redux/CategoriesSlice";
import { useNavigation } from "@react-navigation/native";
import { color } from "react-native-reanimated";


const CategoryFlatList = ({data,selectcat}:any) =>{

    const navigation:any = useNavigation();
    const favouriteList = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();

    const favouriteHandler = (item:any) => {
        dispatch(addFavourite(item.id))
    }

    const detailHandler = (id:any) => {
        const product:any = favouriteList.find((p:any) => p.id === id);
        if('id' in product) {
            navigation.navigate('DetailScreen',{name: product.name, price: product.price, description: product.descrition, units: product.units, count: product.count, image: product.image, id: product.id, categoriesname: product.categoriesname});
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
                <MaterialCommunityIcons name={item.isFavourite ? 'heart' : 'heart-outline'} color={Color.PrimaryLigthGreen} size={24} style={{padding: 10, alignSelf: 'flex-end'}} onPress={() => {favouriteHandler(item)}}/>
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