import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'config/store'

interface LoginState {
    pinLogin: boolean
}

const initialState: LoginState = {
    pinLogin: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setPinLogin: (state, action: PayloadAction<boolean>) => {
            state.pinLogin = action.payload
        }
    }
})

export const { setPinLogin } = loginSlice.actions

export const loginState = (state: RootState) => state.login

export default loginSlice.reducer
