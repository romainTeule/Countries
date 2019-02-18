import { Component, OnInit, Input, Query, OnChanges } from '@angular/core';
import { CountriesApiService } from '../services/countries-api.service';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit, OnChanges {

  @Input() codes: string[] = ["col", "usa", "fra"];
  @Input() Query: string;
  Field: string;
  constructor(private countriesService: CountriesApiService,private route: ActivatedRoute) { }

  ngOnInit()
  {
   
  }

  ngOnChanges() {
    this.Query = this.route.snapshot.paramMap.get('query');
    console.log(this.Query);
    if (this.Query != null) {
      this.countriesService.getCountryByName(this.Query).subscribe(value => {
        value.forEach(x => this.codes.push(x.alpha3Code))

      });
    }
  }

}
