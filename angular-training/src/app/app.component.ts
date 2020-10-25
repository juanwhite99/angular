import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubService } from './services/github.service';
import { Repository } from './models/repository.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  repositories$: Observable<Repository[]>;

  constructor(private githubService: GithubService) {}

  searchRepositoriesByUsername(username: string) {
    this.repositories$ = this.githubService.getRepositoriesByUsername(username);
  }
}
