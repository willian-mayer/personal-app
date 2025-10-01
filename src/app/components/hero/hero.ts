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
    this.heroService.getHeroSection().subscribe({
      next: (data) => {
        this.heroData = data; // Ya no necesitas data[0]
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar hero section:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}