import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appState:{
    value: 'login', // Initial state is 'login'
  }
}

export const slice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
      setAppState: (state, action) => {
        state.appState = action.payload;
      },
    },
});

export const {setAppState} = slice.actions
export default slice.reducer