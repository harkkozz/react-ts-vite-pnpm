import { configureStore } from '@reduxjs/toolkit';

import counter from 'store/counter/counterSlice';

export default configureStore({
  reducer: {
    counter
  }
});
