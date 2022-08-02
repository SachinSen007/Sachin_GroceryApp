import { StyleSheet } from "react-native";
import Color from "../../constant/Color";

const OrderHistoryStyle = StyleSheet.create({
    screen: {
        flex: 1
    },
    heading: {
        fontSize: 20,
        color: Color.PrimaryLigthGreen,
        textAlign: 'center'
    },
    detailsContainer: {
        height: 160,
        backgroundColor: Color.PrimaryWhite,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 20,
        elevation: 4
    },
    orderIdText: {
        fontSize: 16,
        color: Color.PrimaryBlack,
        paddingVertical: 6,
        paddingLeft: 10
    },
    orderId: {
        fontSize: 16,
        color: Color.PrimaryLigthGreen,
        paddingVertical: 6
    },
    image: {
        height: 100,
        width: 100,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    name: {
        fontSize: 16,
        color: Color.PrimaryBlack
    },
    finalAmountText: {
        fontSize: 16,
        color: Color.PrimaryBlack
    },
    finalAmount: {
        fontSize: 16,
        color: Color.PrimaryLigthGreen,
        fontWeight: 'bold'
    },
    orderDateText: {
        fontSize: 16,
        color: Color.PrimaryBlack,
        // paddingVertical: 10,
        paddingLeft: 10
    },
    orderDate: {
        fontSize: 16,
        color: Color.PrimaryLigthGreen,
        // paddingVertical: 10
    },
})

export default OrderHistoryStyle;