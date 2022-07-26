import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SplashScreen from '../screens/SplashScreen';
import SignIn from './SignIn';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import Color from '../constant/Color';
import BottomTabNavigation from '../src/BottomNavigator/BottomNavigator';
import AddToCart from './AddtoCart';


const Stack = createNativeStackNavigator();

// const token:any = AsyncStorage.getItem('idToken');
// console.log(token)

function AllNavigation ({navigation}:any) {
    return(
        
        <NavigationContainer>
        <Stack.Navigator>
          
        <Stack.Screen name='SplashScreen' 
          component={SplashScreen}
          options={{
            headerShown: false
          }}
        />
        
        <Stack.Screen name='SignIn' 
          component={SignIn}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name='RegisterScreen' 
          component={RegisterScreen}
          options={{
            headerShown: false
          }}
        /> 

       <Stack.Screen name='HomeScreen' 
          component={BottomTabNavigation}
          options={{
            headerShown: false
          }}
        /> 

<Stack.Screen name='AddToCart' 
          component={AddToCart}
          options={{
            headerShown: false
          }}
        /> 


{/* 
        <Stack.Screen name='DashboardScreen' 
          component={BottomTabNavigation}
          options={{
            headerShown: false
          }}
        /> */}

        {/* <Stack.Screen name='FavouriteScreen' 
          component={FavouriteScreen}
          options={{
            headerShown: false
          }}
        /> */}

        <Stack.Screen name='DetailScreen' 
          component={DetailScreen}
          options={{
            headerLeft: () => (
              <MaterialCommunityIcons name='arrow-left' color={Color.PrimaryBlack} size={24} />
            ),
          }}
        />

         {/* <Stack.Screen name='Addtocart' 
          component={Addtocart}
          options={{
            headerLeft: () => (
              <MaterialCommunityIcons name='arrow-left' color={Color.PrimaryBlack} size={24} />
            ),
          }}
        /> */}

        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AllNavigation;