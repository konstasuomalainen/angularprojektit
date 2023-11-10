import { Component } from '@angular/core';



@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {

  pagenotFoundTitle: string;
  
  
  constructor() {
    this.pagenotFoundTitle = "404 ERROR"
  }
  
  onButtonClicked()
  {
    
  }

}


