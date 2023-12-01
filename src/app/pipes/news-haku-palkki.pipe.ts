import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NewsComponent } from '../news/news.component';

@Pipe({
  name: 'newsHakuPalkki'
})
export class NewsHakuPalkkiPipe implements PipeTransform {

 
transform(items: any[], searchText: any) {
  if (!items) {
  return [];
  }
  if (!searchText) {
  return items;
  }
 
  searchText = searchText.toLocaleLowerCase();
  return items.filter(it => {
    console.log(it.Title)
    return it.Title.toLocaleLowerCase().includes(searchText);
  
  });
  }

}
