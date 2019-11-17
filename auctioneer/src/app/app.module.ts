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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OffersService} from "./services/offers.service";
import { Offers3Component } from './components/offers/Offers3/offers3.component';
import { Details3Component } from './components/offers/Offers3/details/details3.component';
import { ErrorComponent } from './components/mainpage/error/error.component';
import { Offers4Component } from './components/offers/Offers4/offers4.component';
import { Details4Component } from './components/offers/Offers4/details/details4.component';
import { Details5Component } from './components/offers/Offers5/details/details5.component';
import {Offers2Service} from "./services/offers2.service";
import { Offers6Component } from './components/offers/Offers6/offers6.component';
import { Details6Component } from './components/offers/Offers6/details/details6.component';
import {HttpClientModule} from "@angular/common/http";
import { AppFbComponent } from './app-fb/app-fb.component';
import { OffersListComponent } from './components/offers/OffersList/offers-list.component';
import {SessionService} from "./services/session.service";
import { SignOnComponent } from './components/mainpage/sign-on/sign-on.component';



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
    Offers4Component,
    Details4Component,
    Details5Component,
    Offers6Component,
    Details6Component,
    AppFbComponent,
    OffersListComponent,
    SignOnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [OffersService, Offers2Service, SessionService],
  bootstrap: [AppFbComponent]
})
export class AppModule { }
