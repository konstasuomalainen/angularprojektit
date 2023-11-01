import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomponentinnimiComponent } from './komponentinnimi/komponentinnimi.component';

const routes: Routes = [
  { path: 'komponentinnimi', component: KomponentinnimiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
