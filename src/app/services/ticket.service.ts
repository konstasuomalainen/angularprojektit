import { TicketBuyComponent } from "../ticket-buy/ticket-buy.component";
export class Ticket {

  header: string;
    answer: number;
   

   
    
  
    constructor(value:any)
    {
        this.header = value;
      this.answer = 0;
      
        
    }
    setFeedback(value: number)
    {
       
        
        if (value == 0)
        {
            this.answer = 0;
            }
        else if (value == 1)
        {
            this.answer = 1;
            
        }
        else if (value == 2)
        {
            this.answer = 2;
        }
        else if (value == 3)
        {
            this.answer = 3;
        }
        else if (value == 4)
        {
            this.answer = 4;
        }
        else if (value == 5)
        {
            this.answer = 5;
        }
    }
 
}
