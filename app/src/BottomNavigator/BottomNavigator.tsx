import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from "../../constant/Color";
import Favourite from "../../screens/Favourite";
import AddToCart from "../../screens/AddtoCart";
import Notification from "../../screens/Notification";
import Profile from "../../screens/Profile";
import CartScreen from "../../screens/CartScreen";
import OrderHistory from "../../screens/OrderHistory";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({navigation}:any) => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: Color.PrimaryWhite, 
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30, 
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                height: 60,
                position: 'absolute'
            },
            tabBarActiveTintColor: Color.PrimaryLigthGreen,
            tabBarInactiveTintColor: Color.PrimaryLigthGray,
            tabBarHideOnKeyboard: true
        }}>
        
        
            
       <Tab.Screen name="Home" component={HomeScreen}
        options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='home' color={color} size={26} style={{marginTop: 14}}/>
            ),
          }}
        />
         <Tab.Screen name="Favourite" component={Favourite}
        options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='heart' color={color} size={26} style={{marginTop: 14}}/>
            ),
          }}
        />
         <Tab.Screen name="CartScreen" component={CartScreen}
        options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons 
                name='shopping' 
                color={Color.PrimaryWhite} 
                size={28} 
                style={styles.cartIcon}
                onPress={() => navigation.navigate('AddToCart')}
                />
            ),
          }}
        />
         <Tab.Screen name="Notification" component={OrderHistory}
        options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='bell' color={color} size={26} style={{marginTop: 14}}/>
            ),
          }}
        />
         <Tab.Screen name="Profile" component={Profile}
        options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='account' color={Color.PrimaryLigthGray} size={26} style={{marginTop: 14}}/>
            ),
          }}
        />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    cartIcon: {
        marginBottom: 24 , 
        height: 60, 
        width: 60, 
        borderRadius: 30,
        backgroundColor: Color.PrimaryLigthGreen, 
        padding: 16,
        borderWidth: 4,
        borderColor: Color.PrimaryWhite
    }
})
export default BottomTabNavigation;