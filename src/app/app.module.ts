import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColourComponent } from './components/colour/colour/colour.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { RentalComponent } from './components/rental/rental/rental.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    ColourComponent,
    CustomerComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
