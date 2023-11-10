import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomponentinnimiComponent } from './komponentinnimi/komponentinnimi.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaskinkomponenttiComponent } from './laskinkomponentti/laskinkomponentti.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: 'kuva', component: KomponentinnimiComponent },
  { path: 'laskinkomponentti', component: LaskinkomponenttiComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/laskinkomponentti', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
