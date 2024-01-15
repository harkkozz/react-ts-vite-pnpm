import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('App component', () => {
  it('Should match snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          <h2
            class="_heading_63583b"
          >
            Main page
          </h2>
          <button
            class="_link_63583b"
          >
            Other page
             
          </button>
        </div>
      </div>
    `);
  });
});
