import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITema } from 'src/app/interfaz/interface';
import { BdService } from "../../services/bd.service";

@Component({
  selector: 'app-tema',
  templateUrl: './tema.page.html',
  styleUrls: ['./tema.page.scss'],
})
export class TemaPage implements OnInit {

  formTema: FormGroup;
  tema: ITema;

  constructor(public modalController: ModalController,
    public Build: FormBuilder,
    public bd:BdService, 
    public toast: ToastController
    ) { 
      this.formTema = this.crearFormulario();
    }

    private crearFormulario(){
      return this.Build.group({
        nombre:['',Validators.required],
        descripcion:['',Validators.required]
      });
    }

    public temaJSON(formTema:FormGroup){
      return{
        nombre: formTema.get('nombre').value,
        descripcion: formTema.get('descripcion').value      
      }as ITema
    }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  //nuevo pruebas
  public agregarTema(id: string){
    this.tema = this.temaJSON(this.formTema);
    this.bd.add('tema',this.tema).then(()=>{
      this.mensaje('tema guardada correctamente',3000);
      this.limpiar();
      this.tema = null;
    }).catch(()=>{
      this.mensaje('No se pudo guardar el tema',3000);
    });
  }
  
  async mensaje (mensaje: string, time: number){
  
    let to = await this.toast.create({
      message: mensaje,
      duration: time
    });
    return to.present();
  }

  public limpiar() {
    this.formTema.get('nombre').reset();
    this.formTema.get('descripcion').reset();
  }

}
