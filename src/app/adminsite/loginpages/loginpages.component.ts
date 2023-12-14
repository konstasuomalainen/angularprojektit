import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from "@angular/router";
import { ToolbarComponent } from 'src/app/toolbar/toolbar.component';

@Component({
  selector: 'app-loginpages',
  templateUrl: './loginpages.component.html',
  styleUrls: ['./loginpages.component.css']
})
export class LoginpagesComponent {
  profileForm: FormGroup;
  
  
  constructor(private authenticationService: AuthServiceService,
    private formBuilder: FormBuilder,
    private router: Router,)  {
      
    this.profileForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
      
      passWord: new FormControl('', [Validators.required, Validators.minLength(5)]),
      
  
    });
   
    
  }

  login(value:any)
  {
    this.authenticationService.login(value)
   
    console.log(value.email)
    console.log(value.passWord)
  
  }
     
        
      
  

  toEtusivu()
  {
    this.router.navigate(['etusivu']);
  }

 
  
    
    get email()
  {
    return this.profileForm.get('email');
  }
    get passWord()
    {
      return this.profileForm.get('passWord');
    }
  
 
}
