import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HeaderComponent } from './header/header.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';

import { NotifierModule } from 'angular-notifier';
import { CurrencyDetailComponent } from './currency-detail/currency-detail.component';


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
    SidebarComponent,
    CurrencyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatExpansionModule,
    NotifierModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
