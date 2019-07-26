import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController } from "@ionic/angular";
import { Router } from '@angular/router';
import { LogueoService } from 'src/app/services/logueo.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {
    user: '',
    pass: ''
  }
  constructor(private route: Router, private modal: ModalController, private logueo: LogueoService, private global: GlobalService) { }

  ngOnInit() {
  }

  openRegistrarse(){
    this.route.navigate(['/registrarse']);
  }

  loguearse(){
    const user = `${this.user.user}@unicesar.edu.co`
    this.logueo.loginUser(user, this.user.pass).then(_=>this.route.navigate(['/preguntas']))
    .catch(_=>this.global.mensaje('Usuario y/o contraseña incorrecta', 3000, 'danger'))
  }

}
