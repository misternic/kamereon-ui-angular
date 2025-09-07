import { Component } from '@angular/core';
import { KamereonButton } from '../../projects/kamereon-ui-angular/src/lib/kamereon-button/kamereon-button';

@Component({
	selector: 'app-root',
	imports: [KamereonButton],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	protected title = 'kamereon-ui-angular';
}
