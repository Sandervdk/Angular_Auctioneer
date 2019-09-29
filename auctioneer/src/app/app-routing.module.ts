import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/mainpage/home/home.component";
import {OffersComponent} from "./components/offers/Offers/offers.component";
import {Offers2Component} from "./components/offers/Offers2/offers2.component";
import {Offers3Component} from "./components/offers/Offers3/offers3.component";
import {Offers4Component} from "./components/offers/Offers4/offers4.component";
import {ErrorComponent} from "./components/mainpage/error/error.component";
import {Details4Component} from "./components/offers/Offers4/details/details4.component";


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offers1', component: OffersComponent },
  { path: 'offers2', component: Offers2Component },
  { path: 'offers3', component: Offers3Component },

  { path: 'offers4', component: Offers4Component, children: [
      {path: ':details4', component: Details4Component}
    ]},

  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
