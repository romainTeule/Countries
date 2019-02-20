import { Component, OnInit } from '@angular/core';
import { CountriesApiService } from '../services/countries-api.service';
import { Constants } from '../Models/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  Query:String;
  Field:String;

  Fields:[string,string][]=[...Constants.SearchableFields];
  constructor() {
    
   
   }

  ngOnInit() {
    
   
  }

 
}
