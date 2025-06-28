import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KamereonButton } from 'kamereon-ui-angular';

@Component({
  selector: 'app-root',
  imports: [KamereonButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'kamereon-ui-angular';
}
