import { Component, input } from '@angular/core';

@Component({
  selector: 'kamereon-kamereon-card',
  imports: [],
  templateUrl: './kamereon-card.html',
  styleUrl: './kamereon-card.scss',
})
export class KamereonCard {
  title = input('');
  content = input('');
  image = input('');
  action = input('');
}
