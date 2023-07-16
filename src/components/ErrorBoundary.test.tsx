import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ErrorBoundary from './ErrorBoundary';

describe('Error boundary', () => {
  it('Should match snapshot', () => {
    const { container } = render(<ErrorBoundary />);

    expect(container).toMatchSnapshot();
  });
});
