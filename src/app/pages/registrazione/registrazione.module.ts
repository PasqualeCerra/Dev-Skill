import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrazionePageRoutingModule } from './registrazione-routing.module';

import { RegistrazionePage } from './registrazione.page';

import { TitolodevComponent } from 'src/app/components/titolodev/titolodev.component';
import { BottonComponent } from 'src/app/components/botton/botton.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrazionePageRoutingModule
  ],
  declarations: [RegistrazionePage,TitolodevComponent,BottonComponent]
})
export class RegistrazionePageModule {}
