import { Component, input, output } from '@angular/core';

@Component({
  selector: 'kamereon-kamereon-button',
  imports: [],
  templateUrl: './kamereon-button.html',
  styleUrl: './kamereon-button.scss',
})
export class KamereonButton {
  label = input('');
  primary = input(false);
  size = input('medium', { transform: (value: string) => value.toLowerCase() });
  backgroundColor = input('primary');

  onClick = output();
}
