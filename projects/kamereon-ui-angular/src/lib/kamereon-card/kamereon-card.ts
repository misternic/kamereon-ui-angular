import { Component, input } from '@angular/core';
import { KamereonButton } from '../kamereon-button/kamereon-button';

@Component({
	selector: 'kamereon-card',
	imports: [KamereonButton],
	templateUrl: './kamereon-card.html',
	styleUrl: './kamereon-card.scss',
})
export class KamereonCard {
	title = input('');
	content = input('');
	image = input('');
	action = input('');
}
