import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  RepositoryCardComponent,
  RepositoryListComponent,
  SearchComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepositoryListComponent,
    RepositoryCardComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
