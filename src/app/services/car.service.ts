import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:7234/api/'
 

  constructor(private httpClient: HttpClient) { }

  get()  : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Cars/getall"
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath)
      
  }

  getByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "Cars/getbybrand?id="+brandId
    return this.httpClient
      .get<ListResponseModel<Car>>(newPath)
  }

}
