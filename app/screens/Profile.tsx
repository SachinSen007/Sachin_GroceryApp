import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import EditProfileScreen from './EditProfileScreen'; 


const Profile = ({navigation}:any) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={{color:'#006400', fontSize:20, fontWeight:'bold'}}>Profile Page</Text>
              <Image style={styles.avatar}
                source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

              <Text style={styles.name}>Sachin Sen</Text>
              <Text style={styles.userInfo}>sachinsen30799@gmail.com</Text>
              {/* <Text style={styles.userInfo}>Florida </Text> */}
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              {/* <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/cottage.png'}}/> */}
            </View>
            
            <View style={styles.infoContent}>
            <TouchableOpacity activeOpacity={0.4} onPress={()=> navigation.navigate('EditProfileScreen')} >
              <Text style={styles.info}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              {/* <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/> */}
            </View>
            <TouchableOpacity>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Notification</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              {/* <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/> */}
            </View>
            <TouchableOpacity>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Setting</Text>
            </View>
            </TouchableOpacity>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              {/* <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/facebook-like.png'}}/> */}
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Logout</Text>
            </View>
          </View>

        </View>
    </View>
  );
}




  const styles = StyleSheet.create({
    header:{
      backgroundColor: "#f0ffff",
    },
    headerContent:{
      padding:50,
      alignItems: 'center',
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      //marginBottom:10,
      top:23
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'bold',
      top:27

    },
    userInfo:{
      fontSize:16,
      color:"#000000",
      fontWeight:'bold',
      top:30
    },
    body:{
      backgroundColor: "#86af61",
      height:500,
      alignItems:'center',
     //borderTopLeftRadius:100,
      //borderTopRightRadius:100
    },
    item:{
      flexDirection : 'row',
      alignItems:'center'
    },
    infoContent:{
     flex:1,
     paddingRight:100,
      // justifyContent:'center',
      // alignItems:'center'
      paddingTop:20
     

    },
    iconContent:{
      flex:1,
      alignItems:'flex-end',
      paddingRight:5,
    },
    icon:{
      width:30,
      height:30,
      marginTop:20,
    },
    info:{
      fontSize:18,
      marginTop:30,
      color: "black",
      fontWeight:'bold',
      // textAlign:'center',
      // justifyContent:'center',
      // alignItems:'center'
      
      
    }
  });

  export default Profile

  