import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpastaPage } from './newpasta.page';

const routes: Routes = [
  {
    path: '',
    component: NewpastaPage,
  },
  {
    path: 'pasta', // Path untuk halaman Pasta
    loadChildren: () => import('../pasta/pasta.module').then( m => m.PastaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpastaPageRoutingModule {}
