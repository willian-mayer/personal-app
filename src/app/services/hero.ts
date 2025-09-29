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
  private apiUrl = 'http://localhost:8080/hero-sections';

  constructor(private http: HttpClient) { }

  getHeroSections(): Observable<HeroSection[]> {
    return this.http.get<HeroSection[]>(this.apiUrl);
  }
}