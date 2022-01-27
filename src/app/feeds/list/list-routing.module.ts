import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPage } from './list.page';

const routes: Routes = [
  {
    path: '',
    component: ListPage
  },
  {
    path: 'feeds/details',
    loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'feeds/create',
    loadChildren: () => import('../create/create.module').then( m => m.CreatePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
