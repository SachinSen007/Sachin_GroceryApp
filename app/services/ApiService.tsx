import request from './Api';
import ApiConfig from '../config/ApiConfig';


const authPost = async function (apiName: string, requestBody: any, id: any, image: any) {
  return request({
    url: ApiConfig.Base_url + apiName,
   // authurl: ApiConfig.Auth_url + apiName,
    id: id,
    image: image,
    method: 'post',
    data: requestBody,
  });
};

const post = async function (apiName: string, requestBody: any, id: any, image: any) {
  return request({
   // url:  apiName,
   url: ApiConfig.Base_url + apiName,
    id: id,
    image: image,
    method: 'post',
    data: requestBody,
  });
};

const collecte = async function (apiName: string) {
  return request({
    url: ApiConfig.Base_url + apiName,
    method: 'Get',
  });
};

const get = async function (apiName: string) {
  return request({
    url: ApiConfig.Base_url + apiName,
    method: 'Get',
  });
};
const deleteApi = async function (apiName: string) {
  return request({
    url: ApiConfig.Base_url + apiName,
    method: 'Delete',
  });
};
const apiService = {
  post,
  get,
  authPost,
  deleteApi,
  collecte
};

export default apiService;