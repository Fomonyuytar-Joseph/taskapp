/* eslint-disable */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore ,persistReducer } from 'redux-persist';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

//  import logger from 'redux-logger';
// import LocalStorage from 'redux-persist/lib/storage';
// import storage from 'redux-persist/lib/storage';

const persistConfig ={
    key:'root',
    storage:AsyncStorage,
    

}

const persistedReducer= persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer,applyMiddleware(thunk  ))
export const persistor = persistStore(store)


