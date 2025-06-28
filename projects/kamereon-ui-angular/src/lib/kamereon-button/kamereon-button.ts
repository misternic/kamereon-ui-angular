import { Component, computed, input, output } from '@angular/core';
import { Variant } from '../types/variants';

@Component({
  selector: 'kamereon-button',
  imports: [],
  templateUrl: './kamereon-button.html',
  styleUrl: './kamereon-button.scss',
})
export class KamereonButton {
  label = input('');
  primary = input(false);
  size = input('sm', { transform: (value: string) => value.toLowerCase() });
  variant = input<Variant>('primary');

  onClick = output();

  variantCssClass = computed(() => {
    const variant = this.variant();
    return `btn-${variant}`;
  });

  sizeCssClass = computed(() => {
    const size = this.size();
    return `btn-${size}`;
  });
}
