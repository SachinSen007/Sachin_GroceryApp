import { StyleSheet } from "react-native";
import Color from "../../constant/Color";

const OrderDetailsStyle = StyleSheet.create({
    detailsContainer: {
        height: 110,
        backgroundColor: Color.PrimaryWhite,
        elevation: 4,
        margin: 8,
        borderRadius: 20,
        flexDirection: 'row'
    },
    image: {
        height: 80,
        width: 100,
        marginLeft: 10,
        marginTop: 10
    },
    name: {
        fontSize: 18,
        color: Color.PrimaryBlack,
        paddingTop: 10
    },
    units: {
        fontSize: 16,
        color: Color.PrimaryLigthGray
    },
    price: {
        fontSize: 16,
        color: Color.PrimaryLigthGreen,
        fontWeight: 'bold'
    },
    count: {
        fontSize: 15,
        color: Color.PrimaryBlack
    },
    priceContainer: {
        height: 220,
        backgroundColor: Color.PrimaryWhite,
        elevation: 6,
        margin: 10,
        borderRadius: 20,
        marginTop: 20
    },
    totalAmountText: {
        fontSize: 16,
        color: Color.PrimaryLigthGray,
        padding: 5,
        marginLeft: 10
    },
    totalAmount: {
        fontSize: 16,
        color: Color.PrimaryLigthGreen,
        padding: 5,
        fontWeight: 'bold'
    },
    paymentBtn: {
        height: 40,
        width: 140,
        backgroundColor: Color.PrimaryLigthGreen,
        marginHorizontal: 10,
        borderRadius: 30,
        marginTop: 10,
        alignSelf: 'center'
    },
    paymentText: {
        fontSize: 16,
        color: Color.PrimaryWhite,
        textAlign: 'center',
        padding: 8
    },
    total: {
        fontSize: 20,
        color: Color.PrimaryBlack,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 14
    }
})

export default OrderDetailsStyle;