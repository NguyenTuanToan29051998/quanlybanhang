import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper'

import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >

const makeStore = () => store
export const wrapper = createWrapper(makeStore)
