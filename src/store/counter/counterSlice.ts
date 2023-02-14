import { createSlice } from '@reduxjs/toolkit';

import { decrementAction, incrementAction } from './counterActions';

interface ICounter {
  value: number;
}

const initialState: ICounter = { value: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    [incrementAction]: (state) => {
      state.value += 1;
    },
    [decrementAction]: (state) => {
      state.value -= 1;
    }
  }
});

export const { [decrementAction]: decrement, [incrementAction]: increment } = counterSlice.actions;

export default counterSlice.reducer;
