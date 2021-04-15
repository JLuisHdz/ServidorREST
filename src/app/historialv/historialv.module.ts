import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialvPageRoutingModule } from './historialv-routing.module';

import { HistorialvPage } from './historialv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialvPageRoutingModule
  ],
  declarations: [HistorialvPage]
})
export class HistorialvPageModule {}
