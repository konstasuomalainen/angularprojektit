import { Component } from '@angular/core';

@Component({
  selector: 'app-komponentinnimi',
  templateUrl: './komponentinnimi.component.html',
  styleUrls: ['./komponentinnimi.component.css']
})
export class KomponentinnimiComponent {

  komponentinnimiTitle: string;

  constructor() {
    this.komponentinnimiTitle = "Ensimmäinen harjoitus"

  }
}
