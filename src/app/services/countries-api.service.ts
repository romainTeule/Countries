import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Country } from '../Models/country';
import { Constants } from '../Models/constants';
import { retry, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  private readonly notifier: NotifierService;

  constructor(private httpClient: HttpClient, notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  private performRequest(request: string): Observable<Country> {

    return this.httpClient.get<Country>(request).pipe(
      retry(1),
      catchError(error => this.handleError(error))
    );

  }

  handleError(error): Observable<Country>  {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.notifier.notify('error', errorMessage);
    return of<Country>();
  }
  

 /* getAllCountries(): Observable<Country[]> {
    return this.performRequest<Country[]>(Constants.API_BASE_URL + Constants.API_ALL_ENDPOINT);
  }*/

  getCountryByCode(code: string): Observable<Country> {
    return this.performRequest(Constants.API_BASE_URL + Constants.API_CODE_ENDPOINT + code);
  }


  private performRequestArray(request: string): Observable<Country[]> {

    return this.httpClient.get<Country[]>(request).pipe(
      retry(1),
      catchError(error => this.handleErrorArray(error))
    );

  }

  handleErrorArray(error): Observable<Country[]>  {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.notifier.notify('error', errorMessage);
    return of<Country[]>([]);
  }
  
  getSearchResults(query: string, field: string): Observable<Country[]> {

    if (query != null && field != null) {
      var Endpoint = Constants.SearchableFields.find(x => x[0] == field);

      if (Endpoint != null) {
        return this.performRequestArray(Constants.API_BASE_URL + Endpoint[1] + query + Constants.API_RESPONSE_FILTER);
      }
      else {

        this.notifier.notify('error', "Une erreur est survenue durant la recherche ( Code 400 : WRONG FIELD)");
        return of<Country[]>([]);
      }
    }
    return of<Country[]>([]);



  }
}
