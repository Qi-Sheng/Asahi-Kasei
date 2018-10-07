import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  errors: any = [];
  constructor(public af: AngularFireModule, public db: AngularFirestore, public auth: AngularFireAuth) {
   }

  login(email: string, password: string) {
    this.errors = [];
    console.log(email + ' ' + password);
  }

  ngOnInit() {
  }

}
