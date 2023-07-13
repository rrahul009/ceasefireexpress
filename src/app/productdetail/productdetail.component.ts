import { Component } from '@angular/core';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {

  clicking(smallImg: string) {
    const fullImg = document.getElementById('imagebox') as HTMLImageElement;
    fullImg.src = smallImg;
  
    
  
    // Add code to highlight the displaying page
    const currentPage = document.getElementById('currentPage');
    if (currentPage) {
      currentPage.classList.add('highlight');
    }
  }
  
  
  


}
