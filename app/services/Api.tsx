import axios from 'axios';
import { Alert } from 'react-native';
import constant from '../config/Constant';
import ApiConfig from '../config/ApiConfig'
import NetworkUtils from '../network/NetworkUtils'
import {getAsyncData} from '../helper/AsyncStorageUtil'

let isAlertShow = true;

const client = (() => {
  return axios.create({
    baseURL: ApiConfig.Base_url,
    //authURL : apiConfig.Auth_url,
  });
})();

const request = async function (options: any) {
  const isConnected = await NetworkUtils.isNetworkAvailable();
  if (isConnected) {
    let authHeader = null;
    const res = await getAsyncData(constant.keyAllConstant.userToken).then();
    authHeader = res;
    if (res != null) {
      options.headers = {
        authorization: 'Bearer ' + authHeader,
        'Content-Type': 'application/json',
      };
    } else {
      options.headers = {
        'Content-Type': 'application/json',
        'options.params' : {...options.params}, 
    
      }
    }

    const onSuccess = function (response: any) {
      console.log('OnSucess');
      if (response.status === 203) {
        return response;
      } else {
        return response;
      }
    };
    const onError = function (error: any) {
      console.log('==onError==' + JSON.stringify(error.response));
      if (error?.response?.data?.code === 401) {
        if (isAlertShow) {
          isAlertShow = false;
         Alert.alert('Error');
        }
      } else {
        return Promise.reject(error.response || error.message);
      }
    };
    return client(options).then(onSuccess).catch(onError);
  } else {
    Alert.alert('Network Error',"Please Check Your Network Connection");
  }
};

export default request;