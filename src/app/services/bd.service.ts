import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreModule, AngularFirestoreCollection} from '@angular/fire/firestore';
import { IAsignatura } from '../interfaz/interface';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
=======
import { map } from 'rxjs/operators';
>>>>>>> 67c1fb8dfaf7a060cf702f6e05e9903d3da364ad

@Injectable({
  providedIn: 'root'
})
export class BdService {

  listaInterfax: AngularFirestoreCollection;

  constructor(public firestore:AngularFirestore) { }


  public add(tabla: string, interfax ) {
    return this.firestore.collection(tabla).add(interfax);
  }

<<<<<<< HEAD
  public getList(tabla: string) {
    let obj;
    this.listaInterfax = this.firestore.collection(tabla);
    return this.listaInterfax.snapshotChanges().pipe( map(List=>{
        return List.map(event=>{
          obj = event.payload.doc.data();
          obj.id = event.payload.doc.id;
=======
  public getList(tabla: string){
    let obj;
    this.listaInterfax = this.firestore.collection(tabla);
    return this.listaInterfax.snapshotChanges().pipe(map(List=>{
        return List.map(event=>{
          obj = event.payload.doc.data(),
          obj.id = event.payload.doc.id
>>>>>>> 67c1fb8dfaf7a060cf702f6e05e9903d3da364ad
          return obj;
        })
    }));
  }
}
