import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  url: string;
  
  
  newsData1 = [
    { 'Title': 'Ensi-ilta: Palm Springs', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6124/PalmSprings_550.jpg' },
    { 'Title': 'Ensi-ilta: Karjamäenjoulu', 'PublishDate': '2020-11-24T00:00:00', 'HTMLLead': '', 'ImageURL': 'http://media.finnkino.fi/1012/news/6123/JulPaKutoppen_550.jpg' }];
  newsData = []

  constructor(private httpClient: HttpClient) {
    this.url = "https://www.finnkino.fi/xml/News/";
  }

  /*getData1(): Observable<any> {

    let newsData: any;

    return of(this.newsData);
  }
  */
  getData(): Observable<any> {

    return this.httpClient.get(this.url, { responseType: 'text' })
      .pipe(map(response => {
        
        let newsData: any;
        // tässä muunnetaan xml-data json muotoon
        parseString(response,{ trim: true, explicitArray: false, mergeAttrs: true },
          function (err: any, result: any) {
            newsData = result.News.NewsArticle;
            
          }
          
        );
        
        return newsData;
        console.log(newsData)
      }));
  }

  
 

}
