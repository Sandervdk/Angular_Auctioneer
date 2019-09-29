import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/mainpage/header/header.component';
import { HomeComponent } from './components/mainpage/home/home.component';
import { NavbarComponent } from './components/mainpage/navbar/navbar.component';
import { OffersComponent } from './components/offers/Offers/offers.component';
import { Offers2Component } from './components/offers/Offers2/offers2.component';
import { Details2Component } from './components/offers/Offers2/details/details2.component';
import {FormsModule} from "@angular/forms";
import {OffersService} from "./services/offers.service";
import { Offers3Component } from './components/offers/Offers3/offers3.component';
import { Details3Component } from './components/offers/Offers3/details/details3.component';
import {RouterModule, Routes} from "@angular/router";
import { ErrorComponent } from './components/mainpage/error/error.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers1', component: OffersComponent },
  { path: 'offers2', component: Offers2Component },
  { path: 'offers3', component: Offers3Component },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    Offers2Component,
    Details2Component,
    Offers3Component,
    Details3Component,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
