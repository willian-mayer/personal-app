import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface HeroSection {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) { }

  getHeroSection(): Observable<HeroSection> {
    return this.http.get<HeroSection>('/data/hero-section.json');
  }
}