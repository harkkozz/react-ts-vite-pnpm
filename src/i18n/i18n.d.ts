import type Resources from './resources-type.d.ts';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: keyof typeof Resources;
  }
}
