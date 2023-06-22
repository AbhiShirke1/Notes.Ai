import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/loginReducer';
import notesReducer from './reducers/notesReducer'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    login: loginReducer,
    folderDetails: notesReducer
  }
})

export default store;