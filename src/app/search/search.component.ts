import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from '../services/countries-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Query:String;
  Field:String;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
   
   
  }
}
