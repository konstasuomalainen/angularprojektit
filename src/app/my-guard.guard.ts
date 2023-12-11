import { ActivatedRoute, CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';

import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { of, tap, map } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class myGuardGuard {
  authService = inject(AuthServiceService);
  constructor(public router: Router) { }
    
  

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
    {
      return this.authService.getLoggedInUser().pipe(
        take(1),
        map(authState => Boolean(authState)),
        tap(auth => !auth ? this.router.navigate(['login']) : true)
      )
      
      
      
    
    }
  
}
//export const myGuardGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
 //  return inject(myGuardGuard2).canActivate(next, state);}
  
