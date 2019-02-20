import { Component, OnInit, Input, Query, OnChanges } from '@angular/core';
import { CountriesApiService } from '../services/countries-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../Models/country';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit, OnChanges {


  Query: string;

  countries: Country[] = [];

  Field: string;

  Loading: boolean = false;
  constructor(private countriesService: CountriesApiService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.pipe(

      switchMap((params: ParamMap) => {
        this.countries = [];
        this.Query = params.get('query');
        this.Field = params.get('field');
        this.Loading = true;
        return this.countriesService.getSearchResults(this.Query, this.Field);

      }),

    ).subscribe(data => {
      this.Loading = false;
      if (data && data.length != 0) {
        this.countries = data
      } else {
      
      }
    },

      err => {
        this.Loading = false;
        
      });

  }

  ngOnChanges() {

  }

}
