import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureData {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  features: FeatureItem[];
}
@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  private apiUrl = 'http://localhost:8080/features';

  constructor(private http: HttpClient) { }

  getFeatures(): Observable<FeatureData[]> {
    return this.http.get<FeatureData[]>(this.apiUrl);
  }
}