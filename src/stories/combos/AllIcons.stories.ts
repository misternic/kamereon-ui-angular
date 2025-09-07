import { Meta, StoryObj } from '@storybook/angular';
import { KamereonIcon } from '../../../projects/kamereon-ui-angular/src/lib/kamereon-icon/kamereon-icon';
import { KamereonIconKeys } from '../../../projects/kamereon-ui-angular/src/lib/types/KamereonIcon';

const meta: Meta<typeof KamereonIcon> = {
	title: 'Iconography/All',
	component: KamereonIcon,
};
export default meta;

type Story = StoryObj<typeof KamereonIcon>;

export const AllVariants: Story = {
	render: () => ({
		props: {
			icons: KamereonIconKeys,
		},
		template: `
      <div class="grid grid-cols-[repeat(auto-fit,minmax(min-content,1fr))] gap-4">
        @for (name of icons; track name) {
          <div class="flex flex-col items-center gap-2">
            <span>
                <kamereon-icon [name]="name" variant="primary"></kamereon-icon>
                <kamereon-icon [name]="name" size="large"></kamereon-icon>
            </span>
            <span class="text-sm">{{name}}</span>
          </div>
        }
      </div>
    `,
	}),
};
