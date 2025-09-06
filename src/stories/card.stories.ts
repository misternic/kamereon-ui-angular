import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { KamereonCard } from '../../projects/kamereon-ui-angular/src/lib/kamereon-card/kamereon-card';
import { variantOptions } from '../../projects/kamereon-ui-angular/src/lib/types/variants';
import { sizeOptions } from '../../projects/kamereon-ui-angular/src/lib/types/size';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<KamereonCard> = {
	title: 'Card',
	component: KamereonCard,
	tags: ['autodocs'],
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: {
		title: 'Card Title',
		content: 'A card component has a figure, a body part, and inside body there are title and actions parts',
		image: 'https://www.pokewiki.de/images/thumb/d/d6/Weherba_%28Entwicklungen_in_Paldea_198%29.png/430px-Weherba_%28Entwicklungen_in_Paldea_198%29.png?20230608231708',
	},
};

export default meta;
type Story = StoryObj<KamereonCard>;

export const Default: Story = {
	render: () => ({
		template: `
      <kamereon-card>
        <img card-image src="https://picsum.photos/400/200" alt="Demo" />
        <h2 card-title class="card-title">Demo Title</h2>
        <p card-content>Some description text for the card.</p>
      </kamereon-card>
    `,
	}),
};

export const Actions: Story = {
	args: {
		...meta.args,
		action: 'Buy Now',
	},
};
