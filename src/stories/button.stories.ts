import type { Meta, StoryObj } from '@storybook/angular';
import { componentWrapperDecorator } from '@storybook/angular';
import { fn } from 'storybook/test';
import { KamereonButton } from '../../projects/kamereon-ui-angular/src/lib/kamereon-button/kamereon-button';
import { KamereonIconKeys } from '../../projects/kamereon-ui-angular/src/lib/types/KamereonIcon';
import { sizeOptions } from '../../projects/kamereon-ui-angular/src/lib/types/size';
import { variantOptions } from '../../projects/kamereon-ui-angular/src/lib/types/variants';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<KamereonButton> = {
	title: 'Example/Button',
	component: KamereonButton,
	tags: ['autodocs'],
	decorators: [componentWrapperDecorator((story) => `<div style="text-align: center">${story}</div>`)],
	parameters: {
		grid: {
			columns: 5,
		},
	},
	argTypes: {
		variant: {
			control: 'select',
			options: variantOptions,
		},
		size: {
			control: 'select',
			options: sizeOptions,
		},
		softButton: {
			control: 'boolean',
		},
		icon: {
			control: 'select',
			options: KamereonIconKeys,
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		label: 'Button',
		isLoading: false,
		softButton: false,
		onClick: fn(),
	},
};

export default meta;
type Story = StoryObj<KamereonButton>;

export const Default: Story = {
	args: {
		...meta.args,
	},
};

export const Neutral: Story = {
	args: {
		...meta.args,
		variant: 'neutral',
	},
};

export const Primary: Story = {
	args: {
		...meta.args,
		variant: 'primary',
	},
};

export const PrimaryWithTwoWords: Story = {
	args: {
		...meta.args,
		variant: 'primary',
		label: 'Primary Button',
	},
};

export const Secondary: Story = {
	args: {
		...meta.args,
		variant: 'secondary',
	},
};

export const ExtraSmall: Story = {
	args: {
		...meta.args,
		size: 'extra-small',
	},
};

export const Small: Story = {
	args: {
		...meta.args,
		size: 'small',
	},
};

export const Medium: Story = {
	args: {
		...meta.args,
		size: 'medium',
	},
};

export const Large: Story = {
	args: {
		...meta.args,
		size: 'large',
	},
};

export const ExtraLarge: Story = {
	args: {
		...meta.args,
		size: 'extra-large',
	},
};

export const Disabled: Story = {
	args: {
		...meta.args,
		disabled: true,
	},
};

export const Loading: Story = {
	args: {
		...meta.args,
		label: 'Loading...',
		isLoading: true,
	},
};

export const WithIcon: Story = {
	args: {
		...meta.args,
		label: 'Login',
		icon: 'mdiLogin',
	},
};
