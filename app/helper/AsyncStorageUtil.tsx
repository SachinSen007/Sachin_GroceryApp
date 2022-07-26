import AsyncStorage from '@react-native-async-storage/async-storage';
import Util from './Util';

export const saveAsyncData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    Util.printConsoleLog('==async error==' + error);
  }
};

export const getAsyncData = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    Util.printConsoleLog('==getAsyncData error==' + error);
  }
};

export const clearAsyncData = async () => {
  try {
    return await AsyncStorage.clear();
  } catch (error) {
    Util.printConsoleLog('==clearAsyncData error==' + error);
  }
};

export const removeAsyncData = async (key: string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (error) {
    Util.printConsoleLog('==removeAsyncData error==' + error);
  }
};
