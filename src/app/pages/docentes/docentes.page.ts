import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPersona } from 'src/app/interfaz/interface';
import { BdService } from 'src/app/services/bd.service';
import { GlobalService } from 'src/app/services/global.service';
import { LogueoService } from 'src/app/services/logueo.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.page.html',
  styleUrls: ['./docentes.page.scss'],
})
export class DocentesPage implements OnInit {
  formAdd : FormGroup;
  user: IPersona;
  segment = 'add';
  docentes: IPersona[] = [];
  constructor(private db: BdService, private globalSer: GlobalService, private loginSer: LogueoService) { }

  ngOnInit() {
    this.formAdd = new FormGroup({
      pName: new FormControl('', Validators.compose([Validators.required])),
      sName: new FormControl(''),
      pLastName: new FormControl('', Validators.compose([Validators.required])),
      sLastName: new FormControl('', Validators.compose([Validators.required])),
      tel: new FormControl('', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])),
      user: new FormControl('', Validators.compose([Validators.required])),
      pass: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),
    });
    this.loadDocentes();
  }
  cobroJson(form: FormGroup) {
    return {
      primerNombre: form.get('pName').value,
      segundoNombre: form.get('sName').value,
      primerApellido: form.get('pLastName').value,
      segundoApellido: form.get('sLastName').value,
      telefono: form.get('tel').value,
      user: form.get('user').value,
      pass: form.get('pass').value,
      estado: true,
      rol: 1
    }  as IPersona;
  }
  selectSement(e){
    this.segment = e.detail.value.toString();
  }

public add(){
  this.user = this.cobroJson(this.formAdd);
  // if (this.usuario.password !== this.formCobro.get('confirmPassword').value) {
  //   this.globalSer.mensaje('las contraseñas no son iguales', 3000, ' danger');
  // } else {
    const user = `${this.user.user}@unicesar.edu.co`;
    this.loginSer.createUser(user, this.user.pass)
      .then((res) => {
        this.user.id = res.user.uid;
        this.db.add('persona', this.user, 1, res.user.uid)
        .then(() => {
          this.globalSer.mensaje('se ha registrado con exito', 3000, 'success');
          this.formAdd.reset();
        }).catch(() => {
          this.globalSer.mensaje('No se pudo registrar el ususario', 3000, 'danger');
        });
      }).catch(() => {
        this.globalSer.mensaje('No se pudo crear el usuario', 3000, 'danger');
    });
  }

  loadDocentes(){
    this.db.selectWhereRol('persona', 'rol', 1).subscribe((docs: IPersona[]) => {
      const docentes: IPersona[] = [];
      docs.forEach(doc => {
        docentes.push(doc);
      });
      this.docentes = docentes;
    })
  }
  async delete(slidingItem: IonItemSliding, docente: IPersona, index: number) {
    slidingItem.close();
  }
}
