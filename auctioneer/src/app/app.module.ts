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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    Offers2Component,
    Details2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
