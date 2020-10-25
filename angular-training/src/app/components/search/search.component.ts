import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output()
  search = new EventEmitter<string>();

  userInput = new Subject<string>();
  private sub: Subscription;

  searchText: string;

  ngOnInit() {
    this.sub = this.userInput
      .pipe(
        debounceTime(500),
        filter(value => !!value)
      )
      .subscribe(value => {
        this.search.emit(value);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  searchUsername() {
    this.search.emit(this.searchText);
  }
}
