import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './users/user.slice'

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
