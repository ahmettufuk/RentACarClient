import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:7234/api/Brands/getall'

  constructor(private httpClient : HttpClient) { }

  get():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }


}
