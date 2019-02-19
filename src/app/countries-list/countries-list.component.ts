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

  @Input() codes: string[];
  @Input() Query: string;

  countries: Country[] = [];

  Field: string;
  constructor(private countriesService: CountriesApiService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.pipe(

      switchMap((params: ParamMap) =>
        this.countriesService.getSearchResults(params.get('query'), params.get('field'))
      ),

    ).subscribe(data => {
      console.log(data);
      this.countries = [];
      if (data && data.length != 0) {
        this.countries = data
      }
    },

      err => {
        this.countries = [];
        console.log(err);
      });

  }

  ngOnChanges() {

  }

}
