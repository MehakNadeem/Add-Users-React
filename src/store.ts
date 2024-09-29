import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './features/userSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
