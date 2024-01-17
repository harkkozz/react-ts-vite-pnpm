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
            class="HomePage__styles.heading x2b8uid"
          >
            Main page
          </h2>
          <button
            class="Button__styles.button x1ypdohk x78zum5 x1qihwyb xmgby6i xddr76m x1835gkm x15tramd xq1mx2j xkpwil5"
            style="--backgroundColor: red;"
          >
            Other page
          </button>
        </div>
      </div>
    `);
  });
});
