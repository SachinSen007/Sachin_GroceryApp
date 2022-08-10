import React, { useState, useEffect } from "react";
import {  Text, View } from "react-native";
import SearchBar from "../Components/SearchBar";
import HomeStyle from "./Style/HomeStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from "../constant/Color";
import CategoriesIcon from "../Components/CategoriesIcon";
import LoaderView from "../UI/LoaderView";
import CategoriesApiServices from "../services/CategoriesApiServices";
import Constant from "../config/Constant";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import { getCategoriesData,AllFavourites } from "../redux/CategoriesSlice";
import CategoryFlatList from "../Components/CategoryFlatList ";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
    const alldataItems = useAppSelector((state:any) => state.categories);
    const dispatch = useAppDispatch();

    const [isLoading, setLoader]:any = useState(false);
    const [allData,setAllData]:any = useState([]);
    const [selectedCategory,setSelectedCategory] = useState('Fruits')
    const [selectedFav,setSelectedFav]= useState([]);

    useEffect(() => {
        getAllCategoryData();
    },[])


    const getAllCategoryData = () => {
        if(!isLoading) setLoader(true);
        CategoriesApiServices.getAllCategories(
            Constant.api.CategoryApi,
        )
        .then((response) => {
            setLoader(false);
            const allCategory = [];

            for(const key in response.data){
                const CategoryObj = {
                    
                    id: key,
                    description: response.data[key].description,
                    image: response.data[key].image,
                    name: response.data[key].name,
                    units: response.data[key].units,
                    price: response.data[key].price,
                    count: response.data[key].count,
                    isFavourite: response.data[key].isFavourite,
                    categoriesname: response.data[key].categoriesname,
                    images: response.data[key].images
                    
                };
                allCategory.push(CategoryObj);
            }
            setAllData(allCategory);
            dispatch(getCategoriesData(allCategory))
            getFavouriteItems();
        })
        .catch((e) => {
            setLoader(false)
        });
    }

    const getFavouriteItems = async () => {
        let user = await AsyncStorage.getItem('email');
        const result = user?.substring(0, user.indexOf('@'));
        console.log("RESULT", result)
        axios.get(`https://groceryapp-2a12e-default-rtdb.firebaseio.com/favourites/${result}.json`)
        
        .then((response) => {
            const allFav:any = [];
            for(const key in response.data){
                const favObj = {
                    id: key,
                    p_id: response.data[key].p_id,
                }
                allFav.push(favObj)
            }
            setSelectedFav(allFav)
            dispatch(AllFavourites(allFav))
            console.log(allFav);
            
        })
        .catch((e) => {
            setLoader(false)
        });
    }

    return(
        <View style={HomeStyle.screen}>
        <View style={HomeStyle.headingContainer}>
        <Text style={HomeStyle.headingText}>Product Catalog</Text>
        </View>
        <View>
        <SearchBar/>
        <View style={HomeStyle.categoryContainer}>
        <CategoriesIcon name='fruit-pineapple' color={Color.PrimaryWhite} size={30} category='Fruits' onPress={() => setSelectedCategory('Fruits')}/>
        <CategoriesIcon name='leaf' color={Color.PrimaryWhite} size={30} category='Vegetables' onPress={() => setSelectedCategory('Vegetables')}/>
        <CategoriesIcon name='bottle-soda' color={Color.PrimaryWhite} size={30} category='Milk' onPress={() => setSelectedCategory('Milk')}/>
        <CategoriesIcon name='cake' color={Color.PrimaryWhite} size={30} category='Bakery' onPress={() => setSelectedCategory('Bakery')}/>
        <CategoriesIcon name='fish' color={Color.PrimaryWhite} size={30} category='Fish' onPress={() => setSelectedCategory('Fish')}/>
        </View>
        <View style={HomeStyle.listTextContainer}>
        <Text style={HomeStyle.productText}>Products</Text>
        <View style={{flexDirection: 'row'}}>
        <Text style={HomeStyle.popularText}>Popular</Text>
        <MaterialCommunityIcons name="chevron-down" color={Color.PrimaryBlack} size={20} style={{marginTop: 2}}/>
        </View>
        </View>
        <CategoryFlatList data={alldataItems} selectcat={selectedCategory}/>
        </View> 
        {isLoading && <LoaderView />}
        </View>
    );
}

export default HomeScreen;
