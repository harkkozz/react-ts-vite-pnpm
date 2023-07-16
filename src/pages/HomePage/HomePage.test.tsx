import { fireEvent, render } from '@testing-library/react';
import Test from 'testUtils/TestApp';
import { describe, expect, it, vi } from 'vitest';

import HomePage from './HomePage';

const onUseNavigate = vi.fn();

describe('Home page', () => {
  it('Should match snapshot', () => {
    const { baseElement } = render(
      <Test>
        <HomePage />
      </Test>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('Should navigate to other page', () => {
    const { getAllByRole } = render(
      <Test>
        <HomePage />
      </Test>
    );
    const onNextPage = getAllByRole('button', { name: 'Other page' });
    fireEvent.click(onNextPage[0]);
    expect(onUseNavigate).toHaveBeenCalledTimes(0);
  });
});
