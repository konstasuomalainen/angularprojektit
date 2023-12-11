import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KomponentinnimiComponent } from './komponentinnimi/komponentinnimi.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaskinkomponenttiComponent } from './laskinkomponentti/laskinkomponentti.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { FeedbackComponent } from './feedback/feedback.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { EtusivuComponent } from './etusivu/etusivu.component';
import { FormsComponent } from './forms/forms.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataService } from './services/data.service';
import { NewsComponent } from './news/news.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { NewsHakuPalkkiPipe } from './pipes/news-haku-palkki.pipe';
import { SortByOrderPipe } from './pipes/sort-by-order.pipe';
import { LoginpagesComponent } from './adminsite/loginpages/loginpages.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { ModuleWithProviders } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { myGuardGuard } from './my-guard.guard';
import { TicketBuyComponent } from './ticket-buy/ticket-buy.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    KomponentinnimiComponent,
    PagenotfoundComponent,
    LaskinkomponenttiComponent,
    FeedbackComponent,
    ToolbarComponent,
    EtusivuComponent,
    FormsComponent,
    ReactiveFormsComponent,
    NewsComponent,
    NewsHakuPalkkiPipe,
    SortByOrderPipe,

    LoginpagesComponent,
     TicketBuyComponent,

   

  ],
  imports: [

    AngularFireAuthModule,
    AngularFireModule.initializeApp(
      environment.firebase, 'angular-auth-firebase') as
      ModuleWithProviders<AngularFireModule>,
      
  
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule,
    MatSlideToggleModule,
    
    

    
    

    
    
  ],
  providers: [DataService,
    AuthServiceService,
    myGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
