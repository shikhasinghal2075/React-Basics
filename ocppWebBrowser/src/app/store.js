import {configureStore} from '@reduxjs/toolkit';
import sliceReducer from '../features/slice/slice'

export const store = configureStore({
    reducer: sliceReducer
})