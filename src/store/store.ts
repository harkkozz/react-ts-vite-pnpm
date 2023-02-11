import { configureStore } from '@reduxjs/toolkit';

import counter from 'store/features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter
  }
});
