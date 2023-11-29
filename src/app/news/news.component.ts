import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NewsServiceService } from '../services/news-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  cinemaData: Observable<any>;
  constructor(private newsServiceService: NewsServiceService) { 
    
    
    
    this.cinemaData = this.newsServiceService.getData(); 
 
  }
  
  
  


  



}
