import { configureStore } from '@reduxjs/toolkit';
import mainDataReducer from './reducers/mainData';

export default configureStore({
  reducer: {
    mainData: mainDataReducer,
  },
});