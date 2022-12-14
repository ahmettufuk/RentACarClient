import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colour } from '../models/colour';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {

  apiUrl='https://localhost:7234/api/Colors/getall'

  constructor(private httpClient:HttpClient) { }

  get():Observable<ListResponseModel<Colour>>{
    return this.httpClient.get<ListResponseModel<Colour>>(this.apiUrl);
  }
}
