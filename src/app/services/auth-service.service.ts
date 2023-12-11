import { Injectable } from '@angular/core';

import { LoginpagesComponent } from '../adminsite/loginpages/loginpages.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router'; 
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  
export class AuthServiceService {
  userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');
 
  constructor(public auth: AngularFireAuth,public router: Router) {
    this.auth.authState.subscribe(user => {
      let userEmail =user?.email as string;
  });
  }
  
  
  login(value:any) {
    return (this.auth.signInWithEmailAndPassword(
      value.email, value.passWord
      
    ).then(result => {
      console.log(value.email);
      this.userEmail.next(value.email);
      this.router.navigate(['admin/main']);


    }))
    
    
  }
  getLoggedInUser(): any
  {
    
    return this.auth.authState;
    
  }
  checkLoggedin()
  {
    return this.userEmail
    
  }
}
