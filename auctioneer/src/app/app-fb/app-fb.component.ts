import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app-fb.component.html',
  styleUrls: ['./app-fb.component.css']
})
export class AppFbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAWPzenX0tGujegFvpPI6HLv0rgkNLh4CA",
      authDomain: "ng-auctioneer-is205-5.firebaseapp.com",
      databaseURL: "https://ng-auctioneer-is205-5.firebaseio.com",
      projectId: "ng-auctioneer-is205-5",
      storageBucket: "ng-auctioneer-is205-5.appspot.com",
      messagingSenderId: "166875860941",
      appId: "1:166875860941:web:c0f5b42c0c9b97bf2e3e84"
    })
  }


}
