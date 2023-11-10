import { Component } from '@angular/core';

@Component({
  selector: 'app-laskinkomponentti',
  templateUrl: './laskinkomponentti.component.html',
  styleUrls: ['./laskinkomponentti.component.css'],
  
})


  
export class LaskinkomponenttiComponent {
  result: string;
  
  x: string;
  y: string;
  ratkaisu: string;
  constructor() {
    this.result = "0"
    this.x = "0"
    this.y = ""
    this.ratkaisu = ""
    
  }
  buttons: string[] =
  ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  
  addValue(value: string) {
    
    
    if (value == '=') {
      
        this.ratkaisu = eval(value)
        this.result = this.ratkaisu
      }
      
      this.x = "0"
      this.y = "0"
      
    }
    
  
  
}
