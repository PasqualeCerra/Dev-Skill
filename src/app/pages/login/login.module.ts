import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { TitolodevComponent } from 'src/app/components/titolodev/titolodev.component';
import { BottonComponent } from 'src/app/components/botton/botton.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
  ],
  declarations: [LoginPage,TitolodevComponent,BottonComponent]
})
export class LoginPageModule {}
