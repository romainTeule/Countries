import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HeaderComponent } from './header/header.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list'; 

const appRoutes: Routes = [
  { path: 'countries/:field/:query', component: CountriesListComponent },
  { path: 'detail/:countrycode', component: CountryDetailComponent },
  { path: '**', component: CountriesListComponent }];


@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    HeaderComponent,
    CountriesListComponent,
    SearchComponent,
    PageNotFoundComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
