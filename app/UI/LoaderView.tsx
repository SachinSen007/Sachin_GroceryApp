import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import loaderstyle from './LoaderStyle';
import Languages from '../config/Languages';

const LoaderView = () => {
  return (
    <View style={loaderstyle.container}>
      <ActivityIndicator size={'large'} color={'black'} />
      <Text style={loaderstyle.titlestyle}>{Languages.loading}</Text>
    </View>
  );
};

export default LoaderView;
