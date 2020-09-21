import { configureStore } from '@reduxjs/toolkit'
import { combinedReducer } from './modules'

export const store = configureStore ({
  reducer: combinedReducer
})

export type AppDispatch = typeof store.dispatch
