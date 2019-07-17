import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router, private modal: ModalController) { }

  ngOnInit() {
  }

  openRegistrarse(){
    this.route.navigate(['/registrarse']);
  }

}
