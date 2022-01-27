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
    path: 'feeds/create',
    loadChildren: () => import('./feeds/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil/profil.module').then(m => m.ProfilPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./log/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./log/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./profil/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
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
