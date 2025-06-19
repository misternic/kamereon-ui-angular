import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KamereonButton } from '../../projects/kamereon-ui-angular/src/lib/kamereon-button/kamereon-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KamereonButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'kamereon-ui-angular';
}
