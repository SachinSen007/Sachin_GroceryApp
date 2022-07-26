import { StyleSheet } from "react-native";
import Color from "../../constant/Color";

const DetailScreenStyle = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Color.PrimaryWhite,
    },
    headerImage: {
        height: 220
    },
    detailContainer: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    name: {
        fontSize: 22,
        color: Color.PrimaryBlack,
        paddingHorizontal: 16,
        paddingTop: 20
    },
    units: {
        fontSize: 16,
        color: Color.PrimaryLigthGray,
        paddingHorizontal: 16,
        paddingTop: 4
    },
    plusIcon: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: Color.PrimaryBlack,
        padding: 2,
    },
    minusIcon: {
        alignSelf: 'center',
    },
    textStyle: {
        padding: 4
    },
    plusSimpleIcon: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: Color.PrimaryBlack,
        padding: 2,
        margin: 16
    },
    price: {
        fontSize: 24,
        color: Color.PrimaryLigthGreen,
        fontWeight: 'bold',
        marginTop: 14,
        marginRight: 20
    },
    descriptionHeading: {
        fontSize: 18,
        color: Color.PrimaryBlack,
        marginTop: 14,
        marginHorizontal: 16
    },
    description: {
        fontSize: 16,
        color: Color.PrimaryLigthGray,
        marginHorizontal: 16,
        marginTop: 10
    },
    bottomHeader: {
        height: 60,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        backgroundColor: Color.PrimaryWhite,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 0.1,
        borderColor: Color.PrimaryLigthGray
    },
    cartBtn: {
        height: 40,
        width: 160,
        backgroundColor: Color.PrimaryLigthGreen,
        borderRadius: 30,
        marginTop: 12,
        marginHorizontal: 20
    },
    totalPrice: {
        fontSize: 20,
        color: Color.PrimaryBlack,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 16
    },
    cart: {
        fontSize: 16,
        color: Color.PrimaryWhite,
        textAlign: 'center',
        padding: 6
    },
    shopping: {
        paddingTop: 12,
        paddingLeft: 16
    },
    cartCount: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: Color.PrimaryLigthGreen,
        position: 'absolute',
        marginTop: 10,
        marginLeft: 10
    },
    cartTotal: {
        fontSize: 12,
        color: Color.PrimaryWhite,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

export default DetailScreenStyle;