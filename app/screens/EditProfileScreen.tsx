import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image ,TextInput,Alert} from 'react-native';
import Modal from "react-native-modalbox";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';


const EditProfileScreen = ({navigation}:any) => {
const [image, setImage] = useState('https://bootdey.com/img/Content/avatar/avatar6.png');
const [modalVisible, setModalVisible] = useState(false);
const [displayName, setdisplayName] = useState('');
const [email, setEmail] = useState('');

    const takePhotoFromCamara = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      setModalVisible(false);
    }).catch((err) => { console.log("openCamera catch" + err.toString())
   });
  }

    const takePhotoFromGallery = () => {
     ImagePicker.openPicker({
        width: 300,
        height: 300,
        includeBase64:false,
        cropping: false,
      }).then(image => {
        console.log("IMAGE DATA",image);
        setImage(image.path);
        setModalVisible(false);
      });
    }

const getModal = () =>{
      return (
        <Modal
          entry="bottom"
          coverScreen={true}
          backdropPressToClose={true}
          isOpen={modalVisible}
          style={styles.modalBox}
          onClosed={() => setModalVisible(false)}
        >
           <View style={styles.content}>
           <Text style={styles.uploadtext}>Upload Photo</Text>
           <Text style={styles.uploadtext1}>Create Your Profile Picture</Text>
            <TouchableOpacity style={styles.btn} onPress={takePhotoFromCamara}>
            <Text style={styles.textStyle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={takePhotoFromGallery}>
            <Text style={styles.textStyle}>Choose from Library</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}  onPress={() => setModalVisible(false)}>
            <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
        </View>
        </Modal>
      );
  };




    return (
        <View style={styles.Container}>
        <View style={styles.screen}>
        <MaterialCommunityIcons name='arrow-left' size={25} style={styles.icon} onPress={() => navigation.navigate('Dashboard')} />
        <Text style={styles.headertext}>Edit Profile</Text>
        </View>
        <View style={{flexDirection:'row'}}>
        <Image source={{uri:image}} style={styles.img} />
        <View style={styles.iconview} >
        <MaterialCommunityIcons name='camera' size={24} color={'black'} onPress={() => setModalVisible(true)}/>
        {getModal()}
        </View>
        </View>
         <View style={styles.nameText}>
         <TextInput placeholder='Enter Your Name' placeholderTextColor={'gray'} value={displayName} onChangeText={setdisplayName} style={styles.textinputstyle} />
         </View>
         <View style={styles.cityText}>
         <TextInput placeholder='Enter Your Email' value={email} placeholderTextColor={'gray'} onChangeText={setEmail} style={styles.textinputstyle} />
         </View>
         <TouchableOpacity style={styles.updatebtn} >
           <Text style={styles.updatetxt}>UPDATE</Text>
         </TouchableOpacity>
       </View>
);
}
  
const styles = StyleSheet.create({
Container: {
    flex: 1
},
screen: {
  height:110,
  padding:10,
  flexDirection:'row'
},
headertext:{
 marginLeft:130,
 fontSize:18,
 marginTop:50,
 color:'#006400',
 fontWeight:'bold',
 textAlign:'center'
},
icon: {
   color:'#006400',
   marginTop:50
},
img : {
    height: 100,
    width: 100,
    overflow:'hidden',
    borderRadius:75,
    marginLeft:150,
    marginTop:10,
    position:'absolute',
},
iconview:{
  marginLeft:210,
  marginTop:90,
  //backgroundColor:'#F8D009',
  height:40,
  width:40,
  borderRadius:20,
  position: 'absolute',
  justifyContent:'center',
  alignItems:'center',
},
 modalBox: {
    overflow: "hidden",
    height: 400,
    width: 500,
    backgroundColor: "transparent",
    marginTop:240,
   marginLeft:55
},
  content: {
    position: "absolute",
    bottom: 0,
    width: 390,
    height: 400,
    borderTopLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },
  btn:{
    height:40,
    backgroundColor:'#F8D009',
    width:350,
    borderRadius:10,
    alignItems:'center',
    alignContent:'center',
    marginTop:10,
    shadowOpacity:0.5,
    margin:10,
    paddingTop:5,
  },
  textStyle: {
    fontSize: 20,
    color:'white',
    fontWeight:'bold',
  },
  uploadtext:{
    fontSize: 22, 
    color:'black',
    marginBottom:20,
    fontWeight:'bold'
  },
  uploadtext1:{
    fontSize: 15, 
    color:'gray',
    marginBottom:30,
  },
  nameText:{
    marginTop:200,
    margin:20,
    justifyContent:'space-between',
    borderBottomWidth:2,
    padding:16,
    borderColor:'gray'
  },
  cityText:{
    marginTop:10,
    margin:20,
    justifyContent:'space-between',
    borderBottomWidth:2,
    padding:16,
    borderColor:'gray'
  },
  textStyle1:{
    fontSize:15, 
    color:'black',
  },
  updatebtn:{
    height:40,
    backgroundColor:'#006400',
    width:370,
    borderRadius:10,
    marginTop:40,
    shadowOpacity:0.5,
    margin:10,  
  },
  updatetxt:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    padding:10,
    fontSize:16
  },
  textinputstyle:{
    marginTop:6
  }
});

export default EditProfileScreen;