import { fireEvent, render } from '@testing-library/react';
import Test from 'testUtils/TestApp';
import { describe, expect, it, vi } from 'vitest';

import OtherPage from './OtherPage';

const onUseNavigate = vi.fn();

describe('Other page', () => {
  it('Should match snapshot', () => {
    const { baseElement } = render(
      <Test path="/other-page">
        <OtherPage />
      </Test>
    );

    expect(baseElement).toMatchSnapshot();
  });

  it('Should navigate to home page', () => {
    const { getAllByRole } = render(
      <Test path="/other-page">
        <OtherPage />
      </Test>
    );
    const onNextPage = getAllByRole('button', { name: 'Home page' });
    fireEvent.click(onNextPage[0]);
    expect(onUseNavigate).toHaveBeenCalledTimes(0);
  });
});
