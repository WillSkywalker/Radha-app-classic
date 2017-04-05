import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtDetailComponent } from './art-detail.component';
import { ArticlesComponent } from './articles.component';
import { DashboardComponent } from './dashboard.component';
import { CategoriesComponent } from './categories.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'radha/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'radha/arts/:cat',
    component: ArticlesComponent,
  },
  {
    path: 'radha/arts',
    component: ArticlesComponent,
  },
  {
    path: 'radha/dashboard',
    component: DashboardComponent
  },
  {
    path: 'radha/categories',
    component: CategoriesComponent
  },
  {
    path: 'radha/read/:id',
    component: ArtDetailComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}