import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuarioModel } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { NavigationExtras, Router } from '@angular/router';
import { RegistroAutoModel } from '../models/registro-auto';
import { RegistroAutoService } from '../services/registro-auto.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  usuarios: any;
  autos: any;

  constructor(public alertcontroller:AlertController, public modalCtrl: ModalController, private _usuariosService: UsuariosService,public router: Router, private _registroauto:RegistroAutoService) {}
  usuario: UsuarioModel = new UsuarioModel();
auto : RegistroAutoModel = new RegistroAutoModel();
  ngOnInit() {
  }
  
  async dismiss() {
    return await this.modalCtrl.dismiss();
  }
  
  getUsuarios() {
    this._usuariosService.obtenerUsuarios().then((data: any) =>{
      console.log(data.usuarios);
      this.usuarios=data.usuarios;
    }).catch((err) =>{
      console.log(err);
    })
  }
  
  postUsuario(){
    console.log(this.usuario); 
    this._usuariosService.altaUsuario(this.usuario).then((data: any) =>{
      
      this.ngOnInit();
    }).catch((err) =>{
     
    });
  }
  async registroAuto() {
   
    this.router.navigate(['/menu-driver'])
    const alert = await this.alertcontroller.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: 'Confirmación',
      message: 'Datos guardados',
      buttons: ['OK']
    });

    await alert.present();
  }
async close(){
  const alert = await this.alertcontroller.create({
    cssClass: 'my-custom-class',
    header: 'Alert',
    subHeader: 'Cancelada',
    message: 'Operación cancelada.',
    buttons: [' CANCEL']
  });

  await alert.present();
}
getRegistro() {
  this._registroauto.registroAuto(this.autos).then((data: any) =>{
    console.log(data.autos);
    this.autos=data.autos;
  }).catch((err) =>{
    console.log(err);
  })
}
postRegistro(){
  console.log(this.auto); 
  this._registroauto.altaRegistro(this.auto).then((data: any) =>{

    this.ngOnInit();
  }).catch((err) =>{
   
  });
}
  
  }


