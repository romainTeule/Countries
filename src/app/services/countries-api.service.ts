import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Country } from '../Models/country';
import { Constants } from '../Models/constants';
import { retry, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { error } from 'util';
@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {


  constructor(private httpClient: HttpClient) { }

  private performRequest<T>(request:string): Observable<T>{

    return this.httpClient.get<T>(request).pipe(
      retry(1),
      catchError(error =>this.handleError<T>(error))
    );

  }

  handleError<T>(error): Observable<T> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
   
    return of<T>();
  }

  getAllCountries(): Observable<Country[]> {
    return this.performRequest<Country[]>(Constants.API_BASE_URL + Constants.API_ALL_ENDPOINT);
  }

  getCountryByCode(code: string): Observable<Country> {
    return this.performRequest<Country>(Constants.API_BASE_URL + Constants.API_CODE_ENDPOINT + code);
  }


  getSearchResults(query: string, field: string): Observable<Country[]> {

    var Endpoint=Constants.SearchableFields.find(x => x[0]==field);

    if (Endpoint!=null)
    {
      return this.performRequest<Country[]>(Constants.API_BASE_URL + Endpoint[1] + query + Constants.API_RESPONSE_FILTER);
    }
    else
    {
      //eturn this.handleError<Observable<Country[]>("Une erreur est survenue durant la recherche ( Code 400 : WRONG FIELD)");  
     // return  throwError("Une erreur est survenue durant la recherche ( Code 400 : WRONG FIELD)");  

     return of<Country[]>([]);
    }
   
    
   
  }
}
