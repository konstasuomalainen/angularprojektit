import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs';
import { LoginpagesComponent } from '../adminsite/loginpages/loginpages.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  
  

  login:string
  
  constructor()
  {
   
    this.login = "Sign in"
    
  
  }

 
  
  
}
