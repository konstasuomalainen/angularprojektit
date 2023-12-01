import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { NewsServiceService } from '../services/news-service.service';
import { Observable } from 'rxjs';
import { NewsHakuPalkkiPipe } from '../pipes/news-haku-palkki.pipe';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  isButtonVisible: boolean;
  cinemaData: Observable<any>;
  counter: number;
  searchText: string;
  
  

  constructor(public newsServiceService: NewsServiceService) {

    this.searchText = ""
    this.counter = 0;
    this.isButtonVisible = true;
    this.cinemaData = this.newsServiceService.getData();
    




  }


  hideImg() {
    
    if (this.counter == 0)
    {
      this.isButtonVisible = false;
      this.counter = this.counter + 1
      }
  
    else if (this.counter == 1)
    {
      this.isButtonVisible = true;
      this.counter = this.counter - this.counter
    }
    
  }
  get format()   { return 'mediumDate' }

  










}
