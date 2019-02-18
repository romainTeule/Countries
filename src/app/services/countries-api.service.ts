import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from '../Models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  private API_BASE_URL:string="https://restcountries.eu/rest/v2/";
  private API_ALL_ENDPOINT:string="all/";
  private API_CODE_ENDPOINT:string="alpha/";
  private API_NAME_ENDPOINT:string="name/";
  constructor(private httpClient : HttpClient) { }


  getAllCountries():Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.API_BASE_URL+this.API_ALL_ENDPOINT);
  }

  getCountryByCode(code:string):Observable<Country>{
    return this.httpClient.get<Country>(this.API_BASE_URL+this.API_CODE_ENDPOINT+code);
  }

  getCountryFlag(url:string):Observable<string>{
    return this.httpClient.post<string>(url, {responseType: 'text'});
  }

  getCountryByName(name:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(this.API_BASE_URL+this.API_NAME_ENDPOINT+name);
  }
}
