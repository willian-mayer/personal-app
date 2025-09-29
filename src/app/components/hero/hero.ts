import { Component, OnInit } from '@angular/core';
import { HeroService, HeroSection } from '../../services/hero';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit {
  heroData: HeroSection | null = null;
  loading = true;
  error = false;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroSections().subscribe({
      next: (data) => {
        this.heroData = data[0]; // Tomamos el primer elemento
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar hero sections:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}