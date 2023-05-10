import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'


export const store = configureStore({
  reducer: {
    counter: counterReducer;
  },
})

const slice = createSlice({
  name: 'sliceName',
  initialState: initialStateValue,
  reducers: {
    action1: (state, action) => {
      // 리듀서 로직
    },
    action2: (state, action) => {
      // 리듀서 로직
    },
    // 추가적인 액션과 리듀서를 정의할 수 있습니다.
  },
});


export default configureStore({
  reducer: {
  a: a.reducer
  },
});