import type { Meta, StoryObj } from '@storybook/angular';
import { KamereonIcon } from '../../projects/kamereon-ui-angular/src/lib/kamereon-icon/kamereon-icon';
import { KamereonIconKeys } from '../../projects/kamereon-ui-angular/src/lib/types/KamereonIcon';
import { sizeOptions } from '../../projects/kamereon-ui-angular/src/lib/types/size';
import { variantOptions } from '../../projects/kamereon-ui-angular/src/lib/types/variants';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<KamereonIcon> = {
	title: 'Icon',
	component: KamereonIcon,
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: 'select',
			options: KamereonIconKeys,
		},
		variant: {
			control: 'select',
			options: variantOptions,
		},
		size: {
			control: 'select',
			options: sizeOptions,
		},
	},
	args: {},
};

export default meta;
type Story = StoryObj<KamereonIcon>;

export const Default: Story = {
	args: {
		...meta.args,
	},
};

export const ExtraLarge: Story = {
	args: {
		...meta.args,
		name: 'mdiAssistant',
		size: 'extra-large',
		variant: 'warning',
	},
};

export const mdiAccessPointOff: Story = {
	args: {
		...meta.args,
		name: 'mdiAccessPointOff',
	},
};
