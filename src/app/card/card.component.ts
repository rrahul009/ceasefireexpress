import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  quantity: number = 0;

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  increment() {
    this.quantity++;
  }

}
