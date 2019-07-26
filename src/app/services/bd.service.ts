import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreModule, AngularFirestoreCollection} from '@angular/fire/firestore';
import { IAsignatura } from '../interfaz/interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  listaInterfax: AngularFirestoreCollection;

  constructor(public firestore:AngularFirestore) { }


  public add(tabla: string, datos, tipo?: number, id?: string) {
    let collection;
    switch (tipo) {
      case 1:
          collection = this.firestore.collection(tabla).doc(id).set(datos);
        break;
      default:
          collection = this.firestore.collection(tabla).add(datos);
        break;
    }
    return collection;
  }

  public getList(tabla: string){
    let obj;
    this.listaInterfax = this.firestore.collection(tabla);
    return this.listaInterfax.snapshotChanges().pipe(map(List=>{
        return List.map(event=>{
          obj = event.payload.doc.data(),
          obj.id = event.payload.doc.id
          return obj;
        })
    }));
  }


}
