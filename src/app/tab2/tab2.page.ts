import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistorialvPage } from '../historialv/historialv.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usuario:string;

  constructor(public activeRoute:ActivatedRoute, public router:Router, public modalCtrl: ModalController) {
    this.activeRoute.queryParams.subscribe(parametros=>{
      this.usuario = parametros.userName;
    })
  }
  async historialv() {
    const modal = await this.modalCtrl.create({
      component: HistorialvPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'historialv-modal',
    })
    return await modal.present();
  }
  
  logout(){
    localStorage.removeItem('infoUserFacebook');
    this.router.navigate(['/'])
  }

}
