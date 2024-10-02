import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastaPage } from './pasta.page';

const routes: Routes = [
  {
    path: '',
    component: PastaPage
  },
  {
    path: 'pastadetail',
    loadChildren: () => import('../pastadetail/pastadetail.module').then( m => m.PastadetailPageModule)
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastaPageRoutingModule {}
