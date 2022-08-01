import { StyleSheet } from "react-native";
import Color from "../constant/Color";


const OrderSuccessScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Color.PrimaryWhite,
      },
      image:{
       height:200,
      width:200,
      marginLeft:100,
      marginTop:50
      },
      container1: {
        //backgroundColor:Color.PrimaryLigthGray,
        
        padding: 10,
        borderBottomLeftRadius:200,
        borderBottomRightRadius:200,
        //elevation:30
      },
      imageContainer:{

        height:300,
        width:300,
        alignSelf:'center',
        // marginTop:70,
        //marginLeft:20
      }, 
      Congratulationstxt:{

          marginTop:50,
          textAlign:'center',
          fontSize:30,
          color:Color.PrimaryBlack,
          fontWeight:'bold'
      },
      ordertext:{

        marginTop:20,
        textAlign:'center',
        fontSize:20
      },
      
   });
   
export default OrderSuccessScreenStyle;