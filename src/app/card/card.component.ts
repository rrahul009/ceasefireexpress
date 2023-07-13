import { Component } from '@angular/core';
import { ProductapiService } from '../services/productapi.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private serviceProduct: ProductapiService) { }
  productData: any[] = []
  quantity: number = 0;
  ngOnInit():void{
    this.serviceProduct.getData().subscribe((data)=>{
        this.productData=data;
        console.log(this.productData)
    })
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  increment() {
    this.quantity++;
  }

  

}
