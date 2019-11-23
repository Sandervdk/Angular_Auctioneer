import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: String = 'Visitor';
  private token: string;
  private refreshToken: string;

  constructor() {
  }

  registerAccount(eMail: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(eMail, password).then((response) => {
      this.signIn(eMail, password);
    }).catch((error) => {
      console.log(error)
    })
  }

  signIn(eMail: string, passWord: string) {
    firebase.auth().signInWithEmailAndPassword(eMail, passWord).then((response) => {
      this.refreshToken = response.user.refreshToken;

      firebase.auth().currentUser.getIdToken(true).then((token) => {
        this.token = token;
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  signOff() {
    firebase.auth().signOut().then((response) => {
      this.token = null;
    }).catch(function (error) {
      console.log(error);
      return;
    });
  }

  getCurrentUser() {
    return this.user;
  }

  setCurrentUser(user: String) {
    this.user = user;
  }

  public getToken(): String {
    return this.token;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }
}


