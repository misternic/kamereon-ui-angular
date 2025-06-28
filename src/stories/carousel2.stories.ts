import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { KamereonCarousel } from '../../projects/kamereon-ui-angular/src/lib/kamereon-carousel/kamereon-carousel';

const meta: Meta<KamereonCarousel> = {
  title: 'Carousel2',
  component: KamereonCarousel,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  render: () => {
    const items = [
      {
        image:
          'https://www.pokewiki.de/images/b/b7/Pok%C3%A9mon-Icon_906_KAPU.png',
        name: 'Felori',
      },
      {
        image:
          'https://www.pokewiki.de/images/7/7c/Pok%C3%A9mon-Icon_909_KAPU.png',
        name: 'Krokel',
      },
      {
        image:
          'https://www.pokewiki.de/images/b/b5/Pok%C3%A9mon-Icon_912_KAPU.png',
        name: 'Kwaks',
      },
      {
        image:
          'https://www.pokewiki.de/images/4/46/Pok%C3%A9mon-Icon_921_KAPU.png',
        name: 'Pamo',
      },
    ];

    return {
      props: { items },
      template: `
        <kamereon-carousel [items]="items">
            <ng-template #carouselItem let-item>
                <div class="p-4 bg-white text-center rounded shadow">
                    <img [src]="item.image" />
                    <p>{{ item.name }}</p>
                </div>
            </ng-template>
        </kamereon-carousel>
      `,
    };
  },
};

export default meta;
type Story = StoryObj<KamereonCarousel>;

export const Default: Story = {
  args: {
    ...meta.args,
  },
};
