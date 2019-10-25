import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReceitasrapidasPage } from './receitasrapidas.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitasrapidasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReceitasrapidasPage]
})
export class ReceitasrapidasPageModule {}
