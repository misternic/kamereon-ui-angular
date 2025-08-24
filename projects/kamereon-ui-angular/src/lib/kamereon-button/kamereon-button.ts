import { Component, computed, input, output } from '@angular/core';
import { Variant } from '../types/variants';
import { Size } from '../types/size';

@Component({
  selector: 'kamereon-button',
  imports: [],
  templateUrl: './kamereon-button.html',
  styleUrl: './kamereon-button.scss',
})
export class KamereonButton {
  label = input('');
  disabled = input<boolean | null>(null);

  size = input<Size>('medium');
  variant = input<Variant>('default');
  softButton = input(false);
  isLoading = input(false);

  onClick = output();

  cssClasses = computed(() => {
    const variant = this.variant();
    const size = this.size();
    const softButton = this.softButton();

    return {
      btn: true,
      'btn-neutral': variant === 'neutral',
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-accent': variant === 'accent',
      'btn-info': variant === 'info',
      'btn-success': variant === 'success',
      'btn-warning': variant === 'warning',
      'btn-error': variant === 'error',

      'btn-soft': softButton,

      'btn-xs': size === 'extra-small',
      'btn-sm': size === 'small',
      'btn-lg': size === 'large',
      'btn-xl': size === 'extra-large',
    };
  });

  loadingSpinnerClasses = computed(() => {
    const variant = this.variant();
    const size = this.size();

    return {
      loading: this.isLoading(),
      'loading-spinner': this.isLoading(),

      'loading-xs': size === 'extra-small',
      'loading-sm': size === 'small',
      'loading-lg': size === 'large',
      'loading-xl': size === 'extra-large',
    };
  });
}
