interface ISelectorCounter {
  counter: { value: number };
}

export const counterSelector = (state: ISelectorCounter) => state.counter.value;
