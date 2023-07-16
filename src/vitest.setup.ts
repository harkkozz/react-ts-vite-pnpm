/* eslint-disable @typescript-eslint/no-unsafe-return */
import { vi } from 'vitest';

vi.mock('i18next', () => ({
  use: vi.fn(),
  init: vi.fn()
}));

vi.mock('react-i18next', () => ({
  Provider: ({ children }) => children,
  Trans: ({ children }) => children,
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        changeLanguage: () => new Promise(() => {})
      }
    };
  }
}));

vi.mock('react-router-dom', async () => {
  const reactRouter = await vi.importActual('react-router-dom');
  return {
    ...(reactRouter as any)
  };
});
