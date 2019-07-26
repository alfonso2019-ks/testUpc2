import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { IPersona } from '../interfaz/interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  persona: IPersona = <IPersona>{};
  constructor(private toast: ToastController) { }

  async mensaje(text: string, duration: number, css?: string) {
    const t = await this.toast.create({
      message: text,
      duration: duration,
      color: css
    });
    t.present();
  }
}
