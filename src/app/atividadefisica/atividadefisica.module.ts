import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtividadefisicaPage } from './atividadefisica.page';

const routes: Routes = [
  {
    path: '',
    component: AtividadefisicaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AtividadefisicaPage]
})
export class AtividadefisicaPageModule {}
