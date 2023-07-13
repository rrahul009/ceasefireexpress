import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailComponent } from './productdetail/productdetail.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CardComponent,
    ProductdetailComponent,
    
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
