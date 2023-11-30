const { configureStore, combineReducers } = require("@reduxjs/toolkit");
import AuthSlice from "./Reducers";
import storage from "redux-persist/lib/storage";
import { persistStore,  persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    blacklist: ['err'],
  }
  const  reducer = combineReducers({
    auth: AuthSlice
  })

  const persistReducers = persistReducer(persistConfig,reducer)

const store = configureStore({
    reducer: persistReducers
})

export default store