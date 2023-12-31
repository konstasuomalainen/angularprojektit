import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KomponentinnimiComponent } from './komponentinnimi/komponentinnimi.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaskinkomponenttiComponent } from './laskinkomponentti/laskinkomponentti.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NewsServiceService } from './services/news-service.service';
import { NewsComponent } from './news/news.component';
import { LoginpagesComponent } from './adminsite/loginpages/loginpages.component';
import { MainComponent } from './adminsite/main/main.component';
import { myGuardGuard } from './my-guard.guard';
import { TicketBuyComponent } from './ticket-buy/ticket-buy.component';



const routes: Routes = [
  { path: 'etusivu', component: EtusivuComponent },
  { path: 'kuva', component: KomponentinnimiComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'laskinkomponentti', component: LaskinkomponenttiComponent },
  { path: 'news', component: NewsComponent},
  { path: 'feedback', component: FeedbackComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent },
  { path: 'ticket', component: TicketBuyComponent },
  { path: 'admin/main', component: MainComponent, canActivate: [myGuardGuard] },
  { path: 'login', component: LoginpagesComponent },
  { path: '', redirectTo: '/etusivu', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
  
  
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
