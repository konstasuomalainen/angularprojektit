import { Component } from '@angular/core';
import { SortByOrderPipe } from '../pipes/sort-by-order.pipe';
@Component({
  selector: 'app-etusivu',
  templateUrl: './etusivu.component.html',
  styleUrls: ['./etusivu.component.css']
})
export class EtusivuComponent {

 


  striimit = [
    {
      'Title': 'Youtube', order: Math.floor(Math.random() * 100)
    },
    {
      'Title': 'Twitch', order: Math.floor(Math.random() * 100)
    },
    {
      'Title': 'Kick', order: Math.floor(Math.random() * 100)
    }
  ]
  isButtonVisible: boolean;

  counter: number;
 
  
  

  constructor() {

    
    this.counter = 0;
    this.isButtonVisible = false;
    
    




  }

 
  hideImg() {
    
    if (this.counter == 0)
    {
      this.isButtonVisible = true;
      this.counter = this.counter + 1
      }
  
    else if (this.counter == 1)
    {
      this.isButtonVisible = false;
      this.counter = this.counter - this.counter
    }
    
  }
    
  
}
