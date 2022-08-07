import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {

  cars: Car[] = []
  dataLoaded=false;

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute ) {}

  ngOnInit(): void {
    this.activatedRoute.params
  }

  getCars(){
    this.carService.get().subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getByBrand(brandId).subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }

  
}
