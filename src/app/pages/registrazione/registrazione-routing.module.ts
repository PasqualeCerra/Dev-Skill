import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { RegistrazionePage } from './registrazione.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrazionePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrazionePageRoutingModule {

}

