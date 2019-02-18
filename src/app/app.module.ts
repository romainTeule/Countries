import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HeaderComponent } from './header/header.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'countries/:query', component: CountriesListComponent },
  { path: '**', component: PageNotFoundComponent }];
@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    HeaderComponent,
    CountriesListComponent,
    SearchComponent,
    SearchResultsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
