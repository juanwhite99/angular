import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
})
export class RepositoryListComponent implements OnChanges {
  @Input()
  repositories: Repository[];

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
