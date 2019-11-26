import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceitassaudaveisPage } from './receitassaudaveis.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitassaudaveisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceitassaudaveisPage]
})
export class ReceitassaudaveisPageModule {}
