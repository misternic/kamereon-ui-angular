import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { KamereonButton } from '../../projects/kamereon-ui-angular/src/lib/kamereon-button/kamereon-button';
import { variantOptions } from '../../projects/kamereon-ui-angular/src/lib/types/variants';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<KamereonButton> = {
  title: 'Example/Button',
  component: KamereonButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: variantOptions,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { variant: 'primary', onClick: fn() },
};

export default meta;
type Story = StoryObj<KamereonButton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
