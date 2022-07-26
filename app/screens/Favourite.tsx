import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useAppSelector } from "../redux/hook";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from "../constant/Color";
import { useAppDispatch } from "../redux/hook";
import { increment, decrement, addFavourite } from "../redux/CategoriesSlice";
import FavouriteCatStyle from "./Style/FavouriteCatStyle";

const Favourite = () => {
    const favouriteList = useAppSelector((state) => state.categories);
    const dispatch = useAppDispatch();
    const favouriteHandler = (item:any) => {
        dispatch(addFavourite(item.id))
    }
        return(
        <>
        <Text style={FavouriteCatStyle.headerText}>Your Favourite Items....</Text>
        <FlatList
        data={favouriteList.filter((i:any) => i.isFavourite)}
        numColumns={2}
        contentContainerStyle={styles.flatStyle}
        renderItem={({item}:any) => {
            return(
                <View style={FavouriteCatStyle.itemContainer}>
                <MaterialCommunityIcons name={'heart'} color={Color.PrimaryLigthGreen} size={24} style={{padding: 10, alignSelf: 'flex-end'}} onPress={() => {favouriteHandler(item)}}/>
                <Image source={{uri: item.image}} style={FavouriteCatStyle.itemImages}/>
                <Text style={FavouriteCatStyle.nameText}>{item.name}</Text>
                <Text style={FavouriteCatStyle.unitText}>{item.units}</Text>
                <View style={{flexDirection: 'row',marginTop: 4,justifyContent: 'space-between'}}>
                <Text style={FavouriteCatStyle.priceText}>{item.price}$</Text>
                {item.count > 0 ?<View style={styles.counterStyle}>
                <MaterialCommunityIcons name="minus" color={Color.PrimaryLigthGray} size={20} style={FavouriteCatStyle.minusIcon} onPress={() => dispatch(decrement(item.id))}/>
                <Text style={{fontSize: 16,color:'red'}}>{item.count}</Text>
                <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
                <MaterialCommunityIcons name="plus" color={Color.PrimaryWhite} size={20} style={FavouriteCatStyle.plusIcon}/>
                </TouchableOpacity>
                </View> :
                <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
                <MaterialCommunityIcons name="plus" color={Color.PrimaryWhite} size={20} style={FavouriteCatStyle.plusSimpleIcon}/>
                </TouchableOpacity>}
                </View>
                </View>
            )
        }}
        />
        </>
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
export default Favourite;
