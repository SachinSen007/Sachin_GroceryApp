import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'


const Profile = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
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
              <Text style={styles.info}>Edit Profile</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              {/* <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/administrator-male.png'}}/> */}
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Notification</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              {/* <Image style={styles.icon} source={{uri: 'https://img.icons8.com/color/70/000000/filled-like.png'}}/> */}
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Setting</Text>
            </View>
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
      backgroundColor: "red",
    },
    headerContent:{
      padding:30,
      alignItems: 'center',
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
    },
    name:{
      fontSize:22,
      color:"#000000",
      fontWeight:'600',
    },
    userInfo:{
      fontSize:16,
      color:"#778899",
      fontWeight:'600',
    },
    body:{
      backgroundColor: "green",
      height:500,
      alignItems:'center',
    },
    item:{
      flexDirection : 'row',
    },
    infoContent:{
      flex:1,
      alignItems:'flex-start',
      paddingLeft:5
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
      marginTop:20,
      color: "black",
      textAlign:'center'
      
      
    }
  });

  export default Profile

  