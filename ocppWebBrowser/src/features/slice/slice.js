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
  },
  transactionId: 0,
  sessionEndInfo:{
    unitsConsumed: 0,
    bill: 0
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
      },
      setTransactionId: (state,action) => {
        state.transactionId = action.payload;
      },
      setSessionEndInfo: (state, action) => {
        state.sessionEndInfo.unitsConsumed = action.payload.unitsConsumed;
        state.sessionEndInfo.bill = action.payload.bill;
      }
    },
});

export const {setAppState,setChargers,setSelectedConnector,setTransactionId,setSessionEndInfo} = slice.actions
export default slice.reducer