import { View, Text } from 'react-native'
import React from 'react'
import AllNavigation from './app/screens/AllNavigation';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

const App = () => {
  return (
 
      <Provider store={store}>
     <AllNavigation/>
     </Provider>
 
  )
}

export default App