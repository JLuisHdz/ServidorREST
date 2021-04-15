import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialvPage } from './historialv.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialvPageRoutingModule {}
