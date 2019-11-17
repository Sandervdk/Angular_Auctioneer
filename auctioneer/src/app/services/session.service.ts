import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user : String = 'Visitor';

  constructor() { }

  signIn(eMail: string, passWord: string) {
    firebase.auth().signInWithEmailAndPassword(eMail, passWord)
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  signOff() {
    firebase.auth().signOut()
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getCurrentUser() {
    return this.user;
  }

  setCurrentUser(user : String) {
    this.user = user;
  }
}


