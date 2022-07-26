import { StyleSheet } from "react-native";
import Color from "../../constant/Color";

const RegisterStyle  = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Color.PrimaryWhite
    },
    DetailContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginTop: 20,
        marginVertical: 20
    },
    loginText: {
        fontSize: 26,
        color: Color.PrimaryLigthGreen,
        paddingLeft: 20,
        marginBottom: 40
    },
    textInput: {
        height: 50,
        width: '90%',
        borderWidth: 2,
        borderColor: Color.PrimaryLigthGreen,
        marginHorizontal: 20,
        borderRadius: 30,
        padding: 14,
        color: Color.PrimaryLigthGreen,
        marginTop: 20,
        fontSize: 16
    },
    signupBtn: {
        height: 50,
        width: 140,
        backgroundColor: Color.PrimaryLigthGreen,
        borderRadius: 30,
        marginTop: 30,
        elevation: 4,
        alignSelf: 'center'
    },
    btnText: {
        fontSize: 18,
        color: Color.PrimaryWhite,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10
    },
    headerImage: {
        height: 200,
        width: 400,
        alignSelf: 'flex-end',
        marginTop: 20
    }
})

export default RegisterStyle;