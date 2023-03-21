import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'config/store'

interface User {
  id: string
  name: string
}

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoggedUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    clearLoggedUser: (state) => {
      state.user = null
    }
  }
})

export const { setLoggedUser, clearLoggedUser } = userSlice.actions

export const userState = (state: RootState) => state.user

export default userSlice.reducer