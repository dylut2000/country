import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://restcountries.eu/rest/v2/all';

  constructor(private Http: HttpClient) { }

  getCountries () {
    return this.Http.get(this.API_URL);
  }
  
}
