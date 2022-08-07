import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands : Brand[] =[]
  currentBrand : Brand={brandId:1,brandName:""}
  dataLoaded=false

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand
  }

  getCurrentBrandClass(brand:Brand){
    if(brand ==this.currentBrand){
      return "list-group-item active"
    }

    return "list-group-item"
  }

  getBrands(){
    this.brandService.get().subscribe((response)=>{
      this.brands=response.data
      this.dataLoaded=true
    })
    
  }

}
