import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreModule, AngularFirestoreCollection} from '@angular/fire/firestore';
import { IAsignatura } from '../interfaz/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdService {

  listaInterfax: AngularFirestoreCollection<[]>;

  constructor(public firestore:AngularFirestore) { }


  public add(tabla: string, interfax ) {
    return this.firestore.collection(tabla).add(interfax);
  }

  /*public getList(tabla: string, interfaces):Observable<[]> {
    this.listaInterfax = this.firestore.collection<interfaces>(tabla);
    interfaces = this.listaInterfax.snapshotChanges().map(List=>{
        return List.map(event=>{
            return {
                nombre:event.payload.doc.data().nombre,
                id:event.payload.doc.id
            }
        })
    });
    return this.interfaces;
  }*/
}
