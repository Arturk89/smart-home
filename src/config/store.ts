//https://redux-toolkit.js.org/tutorials/typescript
import { configureStore } from '@reduxjs/toolkit'
import user from 'slices/userSlice'
import login from 'slices/loginSlice'
// import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer: {
        user,
        login
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
