import { StyleSheet } from "react-native";
import Color from "../../constant/Color";

const OrderScreenStyle = StyleSheet.create({

    continueText:{
        fontSize:25,
        fontWeight:'bold',
        backgroundColor:Color.PrimaryLigthGreen,
        height:50,
        width:200,
        marginTop:15,
        borderRadius:20,
        textAlign:'center',
        padding:5,
        color:Color.PrimaryWhite
    },
    totalAmountText: {
        fontSize: 18,
        color: Color.PrimaryWhite,
        padding: 5,
        // marginLeft: 10
    },
    totalAmount: {
        fontSize: 18,
        color: Color.PrimaryWhite,
        padding: 5,
        fontWeight: 'bold',
    },
    paymentBtn: {
        height: 40,
        backgroundColor: Color.PrimaryWhite,
        marginHorizontal: 10,
        borderRadius: 7,
        marginTop: 10
    },
    paymentText: {
        fontSize: 18,
        color: Color.PrimaryLigthGreen,
        textAlign: 'center',
        padding: 7,
        elevation:5,
        fontWeight:'bold'
    },
    totalPriceView:{
        height: 300,
        backgroundColor:Color.PrimaryLigthGreen,
        elevation: 6,
        margin: 10,
        // borderRadius: 20, 
        borderBottomStartRadius:30,
        borderTopEndRadius:30,
        marginTop:20
    },
})

export default OrderScreenStyle;