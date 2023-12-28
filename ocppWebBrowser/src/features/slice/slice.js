import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appState:{
    value: 'login', // Initial state is 'login'
  }
  ,
  chargers: []
}

export const slice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
      setAppState: (state, action) => {
        state.appState = action.payload;
      },
      setChargers: (state, action) => {
        state.chargers = action.payload;
      }
    },
});

export const {setAppState,setChargers} = slice.actions
export default slice.reducer