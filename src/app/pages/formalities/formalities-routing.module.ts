import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormalitiesPage } from './formalities.page';

const routes: Routes = [
  {
    path: '',
    component: FormalitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormalitiesPageRoutingModule {}
