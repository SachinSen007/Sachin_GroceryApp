import { StyleSheet } from "react-native";
import Color from "../../constant/Color";

const DetailPageFlatlistStyle = StyleSheet.create({
    itemContainer: {
        // flex: 1,
        height: 230,
        width: 160,
        backgroundColor: Color.PrimaryWhite,
        elevation: 12,
        marginLeft: 16,
        marginTop: 16,
        borderRadius: 20,
        margin: 10
    },
    itemImages: {
        height: 100,
        width: 120,
        alignSelf: 'center'
    },
    nameText: {
        fontSize: 18,
        paddingLeft: 10,
        color: Color.PrimaryBlack
    },
    unitText: {
        fontSize: 14,
        color: Color.PrimaryLigthGray,
        paddingLeft: 10
    },
    priceText: {
        fontSize: 20,
        color: Color.PrimaryLigthGreen,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    plusIcon: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: Color.PrimaryBlack,
        padding: 2
        // marginRight: 10
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
        marginRight: 10
    }
})

export default DetailPageFlatlistStyle;