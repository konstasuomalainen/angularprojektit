import { _isNumberValue } from '@angular/cdk/coercion';
import { NumberSymbol } from '@angular/common';
import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-laskinkomponentti',
  templateUrl: './laskinkomponentti.component.html',
  styleUrls: ['./laskinkomponentti.component.css'],
  
})


  
export class LaskinkomponenttiComponent {
  result: string;
  resultPrev: string;
  
 
  ratkaisu: string;
  constructor() {
    this.result = ""
    this.resultPrev = ""
    this.ratkaisu = ""
    
  }
  buttons: string[] =
  ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '+', '='];
  
  

  addValue(value: any)
  {

    
      if (value >= "0" && value <= "9")
      {
      this.ratkaisu = this.ratkaisu + value
      this.result = this.ratkaisu
     
      
      
      
      }
     
    
      else if (value == 'C')
      {
       this.result = ""
       this.ratkaisu = ""
       

      }
      else if (value == '/')
      {
        this.ratkaisu = this.ratkaisu + value
        this.result = value
        
       

      }
      else if (value == '*')
      {
        this.ratkaisu = this.ratkaisu + value
        this.result = value
        
       

      }
      else if (value == '-')
      {
        this.ratkaisu = this.ratkaisu + value
        this.result = value
        
        

      }
      else if (value == '+')
      {
        this.ratkaisu = this.ratkaisu + value
        this.result = value
        
        

      }
      else if (value == '=')
      {
        this.ratkaisu = eval(this.ratkaisu)
        this.result = this.ratkaisu
        
        

      }
      
      
    
  }
    
      
    
  
}
