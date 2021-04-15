import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { UsuarioModel } from '../models/usuarios';
import { LoginService } from '../services/login.service';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: any;
  password: string;
  tipo: string;

  constructor(public alertController: AlertController, public router: Router, public modalCtrl: ModalController, private loginService: LoginService, private _usuariosService: UsuariosService ) { 
    this.usuario = this.password = this.tipo = "";
  }
  usuarios: UsuarioModel = new UsuarioModel();

  async logIn(){
    if(this.usuario == 'admin' && this.password == 'pass123' ){
      //Las credenciales son correctas
     let navExtras:NavigationExtras = {
       queryParams:{
         userName:this.usuario
       }
     }
     let infoUser = {
       userName: this.usuario,
       correo: 'user@gamil.com',
       tipoUser: 'admin'
     }
     localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser))
     this.router.navigate(['/tabs/tab2'], navExtras)

    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'SESIÓN INICIADA',
        message: 'LAS CREDENCIALES SON CORRECTAS',
        buttons: ['OK']
      });
  
      await alert.present();
    }
    
  }

  // loginUsuarios(){
  //   console.log(this.usuarios); 
  //   this.loginService.loginUsuario(this.usuarios).then((data: any) =>{
  //     if (this.usuarios.tipoUsuario=='Pasajero') {
  //       this.router.navigate(['/menu-passenger'])
  //     } else {
  //       this.router.navigate(['/menu-driver'])
  //     }
  //   }).catch((err) =>{
  //   console.log(err)
  //   });
  // }
 

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
 
  ngOnInit() {
  }



}
