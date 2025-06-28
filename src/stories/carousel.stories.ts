import type { Meta, StoryObj } from '@storybook/angular';

import { KamereonCarousel } from '../../projects/kamereon-ui-angular/src/lib/kamereon-carousel/kamereon-carousel';

const meta: Meta<KamereonCarousel> = {
  title: 'Example/Carousel',
  component: KamereonCarousel,
  tags: ['autodocs'],

  args: { items: ['Felori', 'Krokel', 'Kwaks'] },
};

export default meta;
type Story = StoryObj<KamereonCarousel>;

export const NonItem: Story = {
  args: { items: [] },
};

export const OneItem: Story = {
  args: { items: ['Pokéball'] },
};

export const TwoItems: Story = {
  args: { items: ['Nachtara', 'Psiana'] },
};

export const ThreeItems: Story = {
  args: { items: ['Felori', 'Krokel', 'Kwaks'] },
};

export const FourItems: Story = {
  args: { items: ['Felori', 'Krokel', 'Kwaks', 'Pikachu'] },
};
