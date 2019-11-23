import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/mainpage/home/home.component";
import {OffersComponent} from "./components/offers/Offers/offers.component";
import {Offers2Component} from "./components/offers/Offers2/offers2.component";
import {Offers3Component} from "./components/offers/Offers3/offers3.component";
import {Offers4Component} from "./components/offers/Offers4/offers4.component";
import {ErrorComponent} from "./components/mainpage/error/error.component";
import {Details4Component} from "./components/offers/Offers4/details/details4.component";
import {Details5Component} from "./components/offers/Offers5/details/details5.component";
import {Offers6Component} from "./components/offers/Offers6/offers6.component";
import {Details6Component} from "./components/offers/Offers6/details/details6.component";
import {OffersListComponent} from "./components/offers/OffersList/offers-list.component";
import {SignOnComponent} from "./components/mainpage/sign-on/sign-on.component";
import {RegisterComponent} from "./components/mainpage/register/register.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offersList', component: OffersListComponent, children: [
      { path: 'offers1', component: OffersComponent },
      { path: 'offers2', component: Offers2Component },
      { path: 'offers3', component: Offers3Component },
      { path: 'offers4', component: Offers4Component, children: [
          {path: ':details4:', component: Details4Component}
        ]},
      { path: 'offers5', component: Offers4Component, children: [
          {path: ':details5:', component: Details5Component}
        ]},
      { path: 'offers6', component: Offers6Component, children: [
          {path: ':details6:', component: Details6Component}
        ]},
    ]},
  { path: 'login', component: SignOnComponent },
  { path: 'register', component: RegisterComponent },






  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
