import { Component } from '@angular/core';
import { Topic } from '../topic';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  topics: Array<Topic> = new Array();
  
    constructor()
    {
        
      this.topics.push(new Topic('Kurssimateriaali'))
      this.topics.push(new Topic('Opetustyyli'))
      this.topics.push(new Topic('Järjestelmät'))
        
    }
  onInputChange(event: any, topic: Topic) {
    
    topic.setFeedback(event.target.value);
  }
  
  OnButtonClick()
  {
    
  }
}
