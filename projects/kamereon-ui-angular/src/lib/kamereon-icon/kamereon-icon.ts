import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { KamereonIcons, KamereonIconType } from '../types/KamereonIcon';
import { Size } from '../types/size';
import { Variant } from '../types/variants';

@Component({
	selector: 'kamereon-icon',
	imports: [NgClass],
	template: `
		<svg
			class="inline-block fill-current"
			[ngClass]="cssClasses()"
			version="1.1"
			viewBox="0 0 24 24"
			style="display:inline-block"
		>
			<path [attr.d]="data()" />
		</svg>
		<span class="sr-only">Icon</span>
	`,
})
export class KamereonIcon {
	name = input<KamereonIconType>('mdiHelp');
	variant = input<Variant>('default');
	size = input<Size>('medium');

	data = computed(() => {
		const icon = KamereonIcons.find((icon) => icon.name === this.name());
		return icon?.path || '';
	});

	cssClasses = computed(() => {
		const variant = this.variant();
		const size = this.size();

		return {
			'text-neutral': variant === 'neutral',
			'text-primary': variant === 'primary',
			'text-secondary': variant === 'secondary',
			'text-accent': variant === 'accent',
			'text-info': variant === 'info',
			'text-success': variant === 'success',
			'text-warning': variant === 'warning',
			'text-error': variant === 'error',

			'h-[0.75em]': size === 'extra-small',
			'h-[0.875em]': size === 'small',
			'h-[1em]': size === 'medium',
			'h-[1.5em]': size === 'large',
			'h-[2.5em]': size === 'extra-large',
		};
	});
}
