import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CdomesticosPage } from './cdomesticos.page';

const routes: Routes = [
  {
    path: '',
    component: CdomesticosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CdomesticosPage]
})
export class CdomesticosPageModule {}
