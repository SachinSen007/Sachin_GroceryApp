

import { StyleSheet, Text, View,FlatList ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Color from '../constant/Color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { increment, decrement } from "../redux/CategoriesSlice";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import CategoryFlatList from '../Components/CategoryFlatList ';
import { color } from 'react-native-reanimated';
import OrderScreen from './OrderScreen ';

const AddToCart = ({navigation}:any) => {
     const favouriteList = useAppSelector((state) => state.categories);
     const dispatch = useAppDispatch();

    console.log(favouriteList)
    const data = favouriteList.filter((item:any) => {
      if(item.count >= 1){
          return item
      }
  })


  

 return(
    <View style={{flex:1}}>
     <FlatList
     data={data}
     renderItem={({item})=>{
         return(
            
             <View style={Styles.container}>
             <Image source={{uri: item.image}} style={Styles.image}/>  
             <View style={{position:'absolute'}}>
             <Text style={Styles.name}>{item.name}</Text> 
             <Text style={Styles.weight}>{item.units}</Text>
             <View style={{flexDirection:'row'}}>
             <Text style={Styles.price}>{item.price}$</Text>
             {item.count > 0 ? <View style={{flexDirection:'row',borderWidth:1,margin:10,borderRadius:20,width:70,justifyContent:'space-between',marginHorizontal:70,marginTop:15}}>
                
             <MaterialCommunityIcons name='minus' color='black' size={20} style={{marginLeft:5}}  onPress={() => dispatch(decrement(item.id))}/>
             <Text style={{color:'red'}}>{item.count}</Text>
             <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
             <MaterialCommunityIcons name='plus' size={20} color='white' style={Styles.plusicon}/>
             </TouchableOpacity>
             </View>:
             <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
            <MaterialCommunityIcons name='plus'color='white' size={20} style={Styles.plusicon2}/>  
            </TouchableOpacity>
             } 
         </View> 
         </View>
                
        </View>
     )
        }}
     
     />
           {/* <TouchableOpacity style={Styles.continue} onPress={()=>navigation.navigate('OrderScreen')}> 
         <Text style={Styles.Btn}>Continue</Text>
         </TouchableOpacity> */}

<View style={Styles.Continuebtn}>
            <TouchableOpacity onPress={() => navigation.navigate('OrderScreen')}>
            <Text style={Styles.continueText}>Continue</Text>
            </TouchableOpacity>
        </View>

     </View>
 )
}

const Styles = StyleSheet.create({
    container:{
        margin: 5,
        height: 140,
        borderRadius: 10,
        elevation: 5,
        backgroundColor:'white'
      

    },
    image:{
        
        marginTop:20,
        marginLeft:10,
        position:'absolute',
        height:100,
         width:100,
        

       
    },
    name:{
       marginLeft:170,
       color:'black',
       fontWeight:'bold',
       marginTop:20,
       fontSize:20,
      
       

    },
    weight:{
        marginLeft:170,
        fontSize:15,
        marginTop:4,
        color:'#a9a9a9',
    },
    price:{
        marginLeft:170,
        marginTop:15,
        fontWeight:'bold',
        color:Color.PrimaryLigthGreen,
        fontSize:23
    },
    icon:{
        
    },
    plusicon:{
        borderWidth:1,
        height:25,
        width:25,
        borderRadius:12,
        padding:3,
        backgroundColor:'black'
    },
    plusicon2:{
        borderWidth:1,
        height:25,
        width:25,
        borderRadius:12,
        padding:3,
        backgroundColor:'black',
        marginLeft:115,
        marginTop:15
    },

    Btn:{
        // color:'black',
        // marginTop:500,
        // textAlign:'center',
        // backgroundColor:'green',
        // padding:10,
        // borderRadius:30,
        // fontWeight:'bold',
},

    continue:{
        borderColor:'green',
        
    },

    Continuebtn:{

        alignItems:'center',
        marginTop:30,
        marginBottom:10
    },

    continueText:{
        fontSize:25,
        fontWeight:'bold',
        backgroundColor:Color.PrimaryLigthGreen,
        height:50,
        width:200,
        borderRadius:20,
        textAlign:'center',
        padding:5,
        color:Color.PrimaryWhite,
    },



})
export default AddToCart;