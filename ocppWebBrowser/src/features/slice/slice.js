import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appState:{
    value: 'login', // Initial state is 'login'
  }
  ,
  chargers: [],
  selectedConnector: {
    chargerId: '',
    connectorId: ''
  }
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
      },
      setSelectedConnector: (state, action) => {
        state.selectedConnector.chargerId = action.payload.chargerId;
        state.selectedConnector.connectorId = action.payload.connectorId;
      }
    },
});

export const {setAppState,setChargers,setSelectedConnector} = slice.actions
export default slice.reducer