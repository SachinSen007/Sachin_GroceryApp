import { StyleSheet } from "react-native";
import Color from "../../constant/Color";

const HomeStyle = StyleSheet.create({
    screen: {
        flex: 1,
        // marginBottom: 320
        // backgroundColor: Color.PrimaryWhite
    },
    headingContainer: {
        alignItems: 'center',
        marginTop: 10,
        
    },
    headingText: {
      fontSize: 20,
      color: Color.PrimaryBlack,
      fontWeight:'bold' 
    },
    seacrStyle: {
        height: 34,
        borderWidth: 1,
        marginTop: 14,
        margin: 10,
        borderRadius: 10,
        paddingLeft: 34,
        fontSize: 12,
        borderColor: 'black',
        color:'black'
    },
    searchContainer: {
        marginTop: 20,
        flexDirection: 'row',
    },
    searchIcon: {
        position: 'absolute',
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft:15,
        
        
    },
    listTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20,
        
        
    },
    productText: {
        fontSize: 18,
        color: Color.PrimaryBlack
    },
    popularText: {
        fontSize: 16,
        color: Color.PrimaryBlack
    },
    itemContainer: {
        flex: 1,
        height: 230,
        width: 160,
        backgroundColor: Color.PrimaryWhite,
        elevation: 2,
        marginHorizontal: 10,
        marginTop: 16,
        borderRadius: 20
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
        padding: 2,
        marginRight: 10
    },
    flatStyle: {
        marginBottom: 80,
        marginHorizontal: 10
    },
    container: {
        backgroundColor: Color.PrimaryLigthGreen,
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 11,
        padding: 10,
        elevation: 6,
    }
})

export default HomeStyle;