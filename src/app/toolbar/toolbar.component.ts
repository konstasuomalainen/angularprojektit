import { Component } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs';
import { LoginpagesComponent } from '../adminsite/loginpages/loginpages.component';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  
  
  email: Observable<string>
  login: string;
  isButtonVisible: boolean
  isButtonVisible1:boolean
  
  constructor(private auth:AuthServiceService)
  {
   
    this.login = "Sign in"
    this.email = auth.checkLoggedin()
    this.isButtonVisible = true;
    this.isButtonVisible1 = false;
    
  
  }
 
   
 

    
  

  checkLoggedIn()
  {
    if (this.email != null)
    {
      
      return true
      
    }
  
    return false
    
  }
  logOut()
  {
   
    this.auth.logOut()

  }
  
  
 
  
}
