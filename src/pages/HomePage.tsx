import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { counterSelector } from 'store/features/counter/counterSelector';
import { decrement, increment } from 'store/features/counter/counterSlice';

const HomePage: React.FC<React.PropsWithChildren> = () => {
  const dispatch = useDispatch();
  const counter = useSelector(counterSelector);

  return (
    <div>
      <h2>Main page</h2>
      <label htmlFor="increment-button">Increment</label>
      <button id="increment-button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <label htmlFor="decrement-button">Increment</label>
      <button id="decrement-button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <div>{counter}</div>
    </div>
  );
};

export default HomePage;
