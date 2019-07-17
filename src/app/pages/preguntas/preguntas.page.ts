import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IPregunta } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {
  tipo = 2;
  arregloRadio = [];
  segment = 'add';
  preguntas = {pregunta: '', respuesta: ''}
  arrayPreguntas: IPregunta[] = [];
  pregunta: IPregunta = <IPregunta>{};
  opciones: string[] = [];
  constructor(toast: ToastController) { }

  ngOnInit() {
  }

  show(e){
    console.log(e.detail.value);
    this.pregunta.respuesta = e.detail.value;
    this.preguntas.respuesta = e.detail.value;
  }
  getTipo(e){
    console.log(e.detail.value)
    this.tipo = e.detail.value;
  }
  addOpcion(){
    let grupoRadio = document.getElementById('radiOpcion');
    this.arregloRadio.push(+1);
    // this.arregloRadio++;
    console.log(this.arregloRadio);
  }
  selectSement(e){
    this.segment = e.detail.value.toString();
  }

  add(){
    if (this.tipo ==1) {
      this.opciones[0] = "falso";
      this.opciones[1] = "verdadero";
      this.pregunta.opciones = this.opciones;
    } else {
      this.pregunta.opciones = this.opciones;
    }
    this.arrayPreguntas.push(this.pregunta);
    this.pregunta = <IPregunta>{};
    this.opciones = [];
    this.arregloRadio = [];
    console.log(this.arrayPreguntas);
  }
  borrarOpc(i) {
    this.arregloRadio.splice(i,1);
  }
}
