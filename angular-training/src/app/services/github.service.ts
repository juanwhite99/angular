import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Repository } from '../models/repository.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  /**
   * Searches for all the public repositories of the given username.
   * @param username Github username
   * @returns An Observable that contains a list of the public repositories.
   */
  getRepositoriesByUsername(username: string) {
    const reposUrl = `${environment.apiUrl}/users/${username}/repos`;

    return this.http.get<Repository[]>(reposUrl);
  }
}
