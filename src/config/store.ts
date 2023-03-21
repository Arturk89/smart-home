//https://redux-toolkit.js.org/tutorials/typescript
import { configureStore } from '@reduxjs/toolkit'
import user from 'slices/userSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    user
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch