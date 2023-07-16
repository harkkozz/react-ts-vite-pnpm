import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App component', () => {
  it('Should match snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchInlineSnapshot('<div />');
  });
});
