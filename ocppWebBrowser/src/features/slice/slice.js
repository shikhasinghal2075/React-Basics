import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userCredentials: {
        phoneNumber: '',
        password: ''
    }
}

export const slice = createSlice({
    name: 'userCredential',
    initialState,
    reducers: {
        addUserCredential: (state, action) => {
            state.userCredentials = {
                phoneNumber: action.payload.phoneNumber,
                password: action.payload.password
            }
        }
    }
})

export const {addUserCredential} = slice.actions

export default slice.reducer