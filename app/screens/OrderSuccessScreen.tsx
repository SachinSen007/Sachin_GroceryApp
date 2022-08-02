import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import OrderSuccessScreenStyle from '../Components/OrderSucessfullscreenstyle';
import LottieView from 'lottie-react-native';


const OrderSuccessScreen = () => {
return(
    <View style={OrderSuccessScreenStyle.container}>
     <View style={OrderSuccessScreenStyle.container1}>
        <LottieView style={OrderSuccessScreenStyle.lottieViewStyle} source={require('../assets/33184-succeeded-done-checked-20.json')} autoPlay loop  />
        </View>
        <View>
            <Text style={OrderSuccessScreenStyle.Congratulationstxt}>Congratulations!</Text>
            <Text style={OrderSuccessScreenStyle.ordertext}>
              Your order was placed successfully,{"\n"} For more details. check Delivery Status,{"\n"}under Profile tab
            </Text>
        </View>
    </View>
)
}

  export default OrderSuccessScreen;