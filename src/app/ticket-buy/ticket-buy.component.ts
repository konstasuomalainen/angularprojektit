import { Component } from '@angular/core';
import { Ticket} from '../services/ticket.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-buy',
  templateUrl: './ticket-buy.component.html',
  styleUrls: ['./ticket-buy.component.css']
})
export class TicketBuyComponent {

  tickets1: Array<Ticket> = new Array();
  tickets2: Array<Ticket> = new Array();
  tickets3: Array<Ticket> = new Array();
 
  profileFormi: FormGroup;
  arvo1: any
  
  tulos1: number;
  tulos2: number;
  tulos3: number;
  tulos30: string
  tulos31: string
  tulos32:string
  kokonaistulos: string;
  kokonaistulosAlennus: string;
  inputCheck: boolean;
  numero: number;
  constructor()
  {
      
    this.tickets1.push(new Ticket('Peruslippu'))
    this.tickets2.push(new Ticket('Opiskelijalippu'))
    this.tickets3.push(new Ticket('Eläkeläinen'))
    
   
  
      this.profileFormi = new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
        lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z ]*$')]),
        email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]),
      });
    
      this.tulos1 = 0;
      this.tulos2 = 0; 
    this.tulos3 = 0;
    this.tulos30 = ""
    this.tulos31 = ""
    this.tulos32 = ""
    this.kokonaistulosAlennus = ""
    this.kokonaistulos = ""
    
    this.inputCheck = false;
    this.numero = 0;
    
    
  }
  toggleChanges() {
    if (this.numero == 0)
    {
      this.inputCheck = true
      this.numero = this.numero + 1
      console.log(this.inputCheck)
    }
    else if (this.inputCheck == true)
    {
      this.inputCheck = false
      this.numero = this.numero - 1
     console.log(this.inputCheck)
   }
  }

onInputChange(event: any, ticket: Ticket) {
  
  ticket.setFeedback(event.target.value);
  
  
}
  values1(ticket1:any)
  {
    
    this.tulos1 = ticket1.answer * 16
 
    this.tulos30 = this.tulos1.toString()
    this.tulos30 = this.tulos30 
  }
  values2(ticket2:any)
  {
   
    this.tulos2 = ticket2.answer * 10
    
    this.tulos31 = this.tulos31 + this.tulos2.toString()
    this.tulos31 = "+" +this.tulos31
  }
  values3(ticket3:any)
  {
    
    this.tulos3 = ticket3.answer * 8
    
    this.tulos32 = this.tulos3.toString()
    this.tulos32 = "+" +this.tulos32
   
    
   
  }
  calculate()
  {
    this.kokonaistulos = this.tulos30 + this.tulos31 + this.tulos32
    this.kokonaistulosAlennus = this.kokonaistulos + "*0.85"
    if (this.inputCheck == false)
    {
      this.kokonaistulos = eval(this.kokonaistulos)
     
    }
    else if (this.inputCheck == true)
    {
      this.kokonaistulos = eval(this.kokonaistulosAlennus)
     
      }
    
  }
  

  buy(value: any) {

    return value && this.kokonaistulos;
    
  }

 
  
  

  OnBuy()
  {
   
    this.profileFormi.reset();
  }
  ngOnInit()
  {
    
  }
 
  get firstName()
  {
    return this.profileFormi.get('firstName');
  }
  get lastName()
  {
    return this.profileFormi.get('lastName');
  }
  get email()
  {
    return this.profileFormi.get('email');
  }



}
