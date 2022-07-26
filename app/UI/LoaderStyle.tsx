import {StyleSheet} from 'react-native';
import dimen from '../config/Dimen';
import Constant from '../config/Constant';

const loaderstyle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  titlestyle: {
    marginTop: dimen.marginLarge,
    // fontFamily: constant.font.poppinsBold,
    fontSize: dimen.fontLarge,
    letterSpacing: 0,
    textAlign: 'center',
    color: 'black',
  },
});

export default loaderstyle;
