import { Component, OnInit } from '@angular/core';
import { FeatureService, FeatureData } from '../../services/feature';  // Cambiado
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature',
  imports: [CommonModule],
  templateUrl: './feature.html',
  styleUrl: './feature.css'
})
export class Feature implements OnInit {
  featureData: FeatureData | null = null;  // Cambiado
  loading = true;
  error = false;

  constructor(private featureService: FeatureService) {}

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe({
      next: (data: FeatureData[]) => {  // Cambiado
        this.featureData = data[0];
        this.loading = false;
      },
      error: (err: Error) => {
        console.error('Error al cargar features:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}