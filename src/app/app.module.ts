import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { HeaderComponent } from './header/header.component';
import { CountriesListComponent } from './countries-list/countries-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryDetailComponent,
    HeaderComponent,
    CountriesListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
