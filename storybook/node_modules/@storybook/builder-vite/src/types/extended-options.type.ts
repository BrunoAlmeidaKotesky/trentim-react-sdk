import type { Options } from '@storybook/types';

// Using instead of `Record<string, string>` to provide better aware of used options
type IframeOptions = {
  title: string;
};

export type ExtendedOptions = Options & IframeOptions;
