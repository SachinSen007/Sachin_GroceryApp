import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import { useRoute } from "@react-navigation/native";
import DetailScreenStyle from "./Style/DetailScreenStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from "../constant/Color";
import { increment, decrement, addFavourite ,addToCart} from "../redux/CategoriesSlice";
import CategoryFlatListStyle from "./CategoryFlatListStyle";
import DetailPageFlatlist from "./DetailPageFlatlist ";
import Slideshow from 'react-native-image-slider-show';



const DetailScreen = ({navigation}:any) => {

    const favouriteList = useAppSelector((state :any) => state.categories);
    const route:any = useRoute();
    const dispatch = useAppDispatch();
    const [position, setPosition] = useState(0)
    
    
    const name = route.params.name;
    const description = route.params.description;
    const price = route.params.price;
    const units = route.params.units;
    const image = route.params.image;
    const count = route.params.count;
    const id = route.params.id;
    const category = route.params.categoriesname;
    const images = route.params.images;
    console.log("vcxbgxghx",images);
    

    useEffect(()=>{
        const toggle = setInterval(() => {
          setPosition(position === images.length - 1 ? 0 : position + 1);
        }, 3000);
      
        return () => clearInterval(toggle);
      })

    const handleAddToCart = (id:any) => {
        dispatch(addToCart(id))
        navigation.navigate('AddToCart')
    }

    return(
       <View style={DetailScreenStyle.screen}>
        <View>
        {/* <Image source={{uri: image}} style={DetailScreenStyle.headerImage}/> */}
        <Slideshow 
       style={DetailScreenStyle.headerImage}
       position={position}  
        dataSource={[
        { url:images[0] },
        { url:images[1] },
        { url:images[2] }
    ]}/> 
        
        </View>
        <View style={DetailScreenStyle.detailContainer}>
        <ScrollView>
        <Text style={DetailScreenStyle.name}>{name}</Text>
        <Text style={DetailScreenStyle.units}>{units}</Text>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {count > 0 ?<View style={styles.counterStyle}>
                <MaterialCommunityIcons name="minus" color={Color.PrimaryLigthGray} size={20} style={DetailScreenStyle.minusIcon} onPress={() => dispatch(decrement(id))}/>
                <Text style={{fontSize: 16}}>{count}</Text>
                <TouchableOpacity onPress={() => dispatch(increment(id))}>
                <MaterialCommunityIcons name="plus" color={Color.PrimaryWhite} size={20} style={DetailScreenStyle.plusIcon}/>
                </TouchableOpacity>
                </View> :
                <TouchableOpacity onPress={() => dispatch(increment(id))}>
                <MaterialCommunityIcons name="plus" color={Color.PrimaryWhite} size={20} style={DetailScreenStyle.plusSimpleIcon}/>
                </TouchableOpacity>}
        <Text style={DetailScreenStyle.price}>{price}$</Text>
        </View>
        <Text style={DetailScreenStyle.descriptionHeading}>Description</Text>
        <Text style={DetailScreenStyle.descriptionStyle}>{description}</Text>
        <Text style={DetailScreenStyle.descriptionHeading}>Popular Products</Text>
        <DetailPageFlatlist data= {favouriteList} selectCat={category} selectId={id}/>
        </ScrollView>
        <View style={DetailScreenStyle.bottomHeader}>
        <View style={{flexDirection: 'row'}}>
        <View style={DetailScreenStyle.cartCount}>
        <Text style={DetailScreenStyle.cartTotal}>{count}</Text>
        </View>
        <MaterialCommunityIcons name="shopping" color={Color.PrimaryLigthGray} size={30} style={DetailScreenStyle.shopping}/>
        {count === 0 ? <Text style={DetailScreenStyle.totalPrice}>${price}</Text> : <Text style={DetailScreenStyle.totalPrice}>${price*count}</Text>}
        </View>
        <TouchableOpacity style={DetailScreenStyle.cartBtn} onPress={() => handleAddToCart(id)}>
         <Text style={DetailScreenStyle.cart}>Add to Cart</Text>
        </TouchableOpacity>
        </View>
        </View>
       </View>
    );
}

const styles = StyleSheet.create({
    counterStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 26,
        width: 74,
        borderWidth: 1,
        borderColor: Color.PrimaryLigthGray,
        marginLeft: 16,
        marginTop: 14,
        borderRadius: 20
    }
})
export default DetailScreen;


