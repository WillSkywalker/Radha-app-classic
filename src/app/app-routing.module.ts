import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtDetailComponent } from './art-detail.component';
import { ArticlesComponent } from './articles.component';
import { DashboardComponent } from './dashboard.component';
import { CategoriesComponent } from './categories.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'arts/:cat',
    component: ArticlesComponent,
  },
  {
    path: 'arts',
    component: ArticlesComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'read/:id',
    component: ArtDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}