import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntretenimentoPage } from './entretenimento.page';

const routes: Routes = [
  {
    path: '',
    component: EntretenimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntretenimentoPage]
})
export class EntretenimentoPageModule {}
