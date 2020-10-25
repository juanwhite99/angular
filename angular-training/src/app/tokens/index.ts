import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken('API URL', {
  providedIn: 'root',
  factory: () => 'https://api.github.com',
});
