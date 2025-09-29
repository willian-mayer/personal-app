import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Navbar } from './components/navbar/navbar';
import { Feature } from './components/feature/feature';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Navbar, Feature],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personal-app');
}
