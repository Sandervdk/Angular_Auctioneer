import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: String = 'Visitor';
  private token: string;
  private refreshToken: string;
  private REST_BARE_URL: string = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  registerAccount(eMail: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(eMail, password).then((response) => {
      this.signIn(eMail, password);
    }).catch((error) => {
      console.log(error)
    })
  }

  // New sign in
  signIn(email: string, password: string, targetUrl?: string) {
    console.log("login " + email + "/" + password);
    let oObservable =
      this.http.post<HttpResponse<User>>(this.REST_BARE_URL + "/authenticate/login",
        {email: email, password: password},
        {observe: "response"});
    oObservable
      .subscribe(
        response => {
          console.log(response);
          this.setToken(response.headers.get('Authorization'));
        },
        error => {
          console.log(error);
          this.setToken(null);
        }
      );
  }

  // Old sign in method
  /*  signIn(eMail: string, passWord: string) {
      firebase.auth().signInWithEmailAndPassword(eMail, passWord).then((response) => {
        this.refreshToken = response.user.refreshToken;

        firebase.auth().currentUser.getIdToken(true).then((token) => {
          this.token = token;
        })
      }).catch((error) => {
        console.log(error);
      });
    }*/

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

  public setToken(token : string) {
    this.token = token;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }
}


