/* eslint-disable */

import * as React from 'react';
import App from './App';
import {store, persistor} from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Text, View} from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text
            >
            Loading...
          </Text>
          </View>
        }
        persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;
