import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feeds',
    loadChildren: () => import('./feeds/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'feeds/details',
    loadChildren: () => import('./feeds/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: '',
    redirectTo: 'feeds',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
