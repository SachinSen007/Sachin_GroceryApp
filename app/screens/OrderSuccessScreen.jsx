import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import OrderSuccessScreenStyle from '../components/OrderSucessfullscreenstyle';

const OrderSuccessScreen = ({navigation}) => {
return(
    <View style={OrderSuccessScreenStyle.container}>
     <View style={OrderSuccessScreenStyle.container1}>
        <LottieView style={OrderSuccessScreenStyle.lottieViewStyle} source={require('../assets/success1.gif')} autoPlay loop/>
        </View>
        <View>
            <Text style={OrderSuccessScreenStyle.Congratulationstxt}>Congratulations!</Text>
            <Text style={OrderSuccessScreenStyle.ordertext}>
              Your order was placed successfully,{"\n"} For more details. check Devivery Status,{"\n"}under Profile tab
            </Text>
        </View>
    </View>
)
}

  export default OrderSuccessScreen;