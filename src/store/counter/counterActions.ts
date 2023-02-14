import { createAction } from '@reduxjs/toolkit';

export const incrementAction = createAction('counter/increment').type;
export const decrementAction = createAction('counter/decrement').type;
