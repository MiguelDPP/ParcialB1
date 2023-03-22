import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormalitiesPageRoutingModule } from './formalities-routing.module';

import { FormalitiesPage } from './formalities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormalitiesPageRoutingModule
  ],
  declarations: [FormalitiesPage]
})
export class FormalitiesPageModule {}
