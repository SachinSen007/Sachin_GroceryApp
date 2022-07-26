import React from "react";
import { FlatList, View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DetailPageFlatlistStyle from "./Style/DetailPageFlatlistStyle";
import Color from "../constant/Color";
import { increment, decrement, addFavourite } from "../redux/CategoriesSlice";

const DetailPageFlatlist = ({selectCat, data, selectId}:any) => {

    const dispatch = useAppDispatch();

    const favouriteHandler = (item:any) => {
        dispatch(addFavourite(item.id))
    }
    

     return(
        <FlatList
        data={selectCat ? 
        data.filter((catItem:any) => {
            if(catItem.categoriesname === selectCat) {
                if(catItem.id !== selectId){
                    return catItem
                }
            }
        }): 
        data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}:any) => {
            return(
                <TouchableOpacity activeOpacity={0.4}>
                <View style={DetailPageFlatlistStyle.itemContainer}>
                <MaterialCommunityIcons name={item.isFavourite ? 'heart' : 'heart-outline'} color={Color.PrimaryLigthGreen} size={24} style={{padding: 10, alignSelf: 'flex-end'}} onPress={() => {favouriteHandler(item)}}/>
                <Image source={{uri: item.image}} style={DetailPageFlatlistStyle.itemImages}/>
                <Text style={DetailPageFlatlistStyle.nameText}>{item.name}</Text>
                <Text style={DetailPageFlatlistStyle.unitText}>{item.units}</Text>
                <View style={{flexDirection: 'row',marginTop: 4,justifyContent: 'space-between'}}>
                <Text style={DetailPageFlatlistStyle.priceText}>{item.price}$</Text>
                {item.count > 0 ?<View style={styles.counterStyle}>
                <MaterialCommunityIcons name="minus" color={Color.PrimaryLigthGray} size={20} style={DetailPageFlatlistStyle.minusIcon} onPress={() => dispatch(decrement(item.id))}/>
                <Text style={{fontSize: 16}}>{item.count}</Text>
                <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
                <MaterialCommunityIcons name="plus" color={Color.PrimaryWhite} size={20} style={DetailPageFlatlistStyle.plusIcon}/>
                </TouchableOpacity>
                </View> :
                <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
                <MaterialCommunityIcons name="plus" color={Color.PrimaryWhite} size={20} style={DetailPageFlatlistStyle.plusSimpleIcon}/>
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
export default DetailPageFlatlist;