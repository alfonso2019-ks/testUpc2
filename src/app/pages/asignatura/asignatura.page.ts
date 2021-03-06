import { Component, OnInit } from '@angular/core';
import {ModalController, ToastController} from '@ionic/angular';
import { TemaPage } from '../tema/tema.page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IAsignatura } from 'src/app/interfaz/interface';
import { BdService } from "../../services/bd.service";

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  formAsignatura: FormGroup;
  asignatura: IAsignatura = <IAsignatura>{};
  asignaturas: IAsignatura[] = [];

  constructor(
    public modalController: ModalController,
    public Build: FormBuilder,
    public toast: ToastController,
    public bd: BdService
    ) {
    this.formAsignatura = this.crearFormulario();
    this.listaAsignatura();
  }

  private crearFormulario(){
    return this.Build.group({
      nombre:['',Validators.required]
    });
  }

  ngOnInit() {
    this.loadAsignatura();
  }

  public loadAsignatura(){
    this.bd.getList('asignatura').subscribe((listAsig: IAsignatura[]) => {
      let asign = [];
      listAsig.forEach(asig => {
        asign.push(asig);
      });
      this.asignaturas = asign;
    })
  }
  public asignaturaJSON(formTema:FormGroup){
    return{
      nombre: formTema.get('nombre').value  
    }as IAsignatura
  }
  //juepa
  async presentModal() {
    const modal = await this.modalController.create({
      component: TemaPage
    });
    return await modal.present();
  }

  public agregarAsignatura(){
    this.asignatura = this.asignaturaJSON(this.formAsignatura);
    this.bd.add('asignatura',this.asignatura).then(()=>{
      this.mensaje('Asignatura guardada correctamente',3000);
      this.limpiar();
      this.asignatura = null;
    }).catch(()=>{
      this.mensaje('No se pudo guardar la asignatura',3000);
    });
  }

  public listaAsignatura(){
    this.bd.getList("asignatura").subscribe((listAsig: IAsignatura[])=>{
      let asign = [];
      listAsig.forEach(element => {
        asign.push(element);
      });
      this.asignaturas = asign;
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
    this.formAsignatura.get('nombre').reset();
  }

}
