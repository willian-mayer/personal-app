import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personal-app');
}
