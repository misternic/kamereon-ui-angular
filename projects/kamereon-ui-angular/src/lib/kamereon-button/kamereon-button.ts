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
  size = input('medium', { transform: (value: string) => value.toLowerCase() });
  backgroundColor = input<Variant>('primary');

  onClick = output();

  variantCssClass = computed(() => {
    const variant = this.backgroundColor();
    return `btn-${variant}`;
  });
}
