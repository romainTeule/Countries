import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../Models/country';
import { CountriesApiService } from '../services/countries-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  Country: Country;
  Flag: string;
  constructor(private countriesService: CountriesApiService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.countriesService.getCountryByCode((params.get('countrycode'))
      )
    )).subscribe(value => {
      this.Country = value;
  });
  }


  get LanguageList():string{return this.Country.languages.map(x => x.name).join(', ');}
  get regionalBlocs():string{return this.Country.regionalBlocs.map(x => x.name).join(', ');}
}
