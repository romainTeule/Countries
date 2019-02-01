import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../Models/country';
import { CountriesApiService } from '../services/countries-api.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  Country: Country;
  Flag: string;
  @Input() code = "col";
  constructor(private countriesAPI: CountriesApiService) { }

  ngOnInit() {
    this.countriesAPI.getCountryByCode(this.code).subscribe(value => {
    this.Country = value/*,
      this.countriesAPI.getCountryFlag(this.Country.flag)
        .subscribe(value => this.Flag = value)
    */});

  }

}
