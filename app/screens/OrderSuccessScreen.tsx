import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import OrderSuccessScreenStyle from '../Components/OrderSucessfullscreenstyle';


const OrderSuccessScreen = () => {
return(
    <View style={OrderSuccessScreenStyle.container}>
     <View style={OrderSuccessScreenStyle.container1}>
        <Image style={OrderSuccessScreenStyle.imageContainer} source={require('../assets/sucess.png')}/>
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