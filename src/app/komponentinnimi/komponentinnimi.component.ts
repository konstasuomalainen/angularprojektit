import { Component } from '@angular/core';

@Component({
  selector: 'app-komponentinnimi',
  templateUrl: './komponentinnimi.component.html',
  styleUrls: ['./komponentinnimi.component.css']
})
export class KomponentinnimiComponent {

  komponentinnimiTitle: string;
  itemPhoto: string;
  first_name: string;
  i = 0;
  e = 1;
  o = 4;
  
  
  constructor() {
    this.komponentinnimiTitle = "";
    this.first_name = "angular";
    this.itemPhoto = "https://cdn.pixabay.com/photo/2023/10/24/16/57/plant-8338691_1280.jpg"
  }
  vaihdaKuvaButton() {
    this.i = this.i + this.e;
    this.itemPhoto = "https://cdn.pixabay.com/photo/2023/10/24/16/57/plant-8338691_1280.jpg"
    if (this.i == 1)
      this.itemPhoto = "https://cdn.pixabay.com/photo/2023/10/29/09/25/dragonfly-8349190_1280.jpg"

    if (this.i == 2)
      this.itemPhoto = "https://cdn.pixabay.com/photo/2023/10/16/16/49/insect-8319652_1280.jpg"
    if (this.i == 3)
      this.itemPhoto = "https://cdn.pixabay.com/photo/2023/10/12/20/51/autumn-8311804_1280.jpg"
    
    if (this.i > 3)
      
      this.i = this.i - this.o




  }

}

