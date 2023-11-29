import { Component,ViewEncapsulation } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ReactiveFormsComponent {

  profileForm: FormGroup;


  
  constructor()
  {
    this.profileForm = new FormGroup({
      firstName: new FormControl('Anna', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('Kansas', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
      personID: new FormControl('00000-0000', [Validators.required, Validators.minLength(10), Validators.pattern('^(0[1-9]|[12]\d|3[01])(0[1-9]|1[0-2])([5-9]\d\+|\d\d-|[01]\dA)\d{3}[\dA-Z]$')]),
      email: new FormControl('Anna.Kansas@gmail.com', [Validators.required, Validators.minLength(3), Validators.email]),
      userName: new FormControl('AnnaTz', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]),
      passWord: new FormControl('Koira123456789', [Validators.required, Validators.minLength(10), Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$')]),
      passWordConfirm: new FormControl('Koira123456789', [Validators.required, Validators.minLength(10)]),
      termsandconditions: new FormControl("", [Validators.required]),
    
    });
  }
  OnSubmit()
  {
    console.warn('profileForm.value: ' + this.profileForm.value.firstName);
    console.warn('profileForm.valid: ' + this.profileForm.valid);



    this.profileForm.reset();
  }
  ngOnInit()
  {
    
  }
  get firstName()
  {
    return this.profileForm.get('firstName');
  }
  get lastName()
  {
    return this.profileForm.get('lastName');
  }
  get personID()
  {
    return this.profileForm.get('personID');
  }
  get email()
  {
    return this.profileForm.get('email');
  }
  get userName()
  {
    return this.profileForm.get('userName');
  }
  get passWord()
  {
    return this.profileForm.get('passWord');
  }
  get passWordConfirm()
  {
    return this.profileForm.get('passWordConfirm');
  }
  get termsandconditions()
  {
    return this.profileForm.get("termsandconditions")
  }
  


}
