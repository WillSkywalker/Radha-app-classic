import { NgModule }      from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';
import { ArtDetailComponent } from './art-detail.component';
import { ArticlesComponent } from './articles.component';
import { ArticleService } from './art.service';
import { DashboardComponent } from './dashboard.component';
import { CategoriesComponent } from './categories.component';
import { AppRoutingModule } from './app-routing.module';

import 'hammerjs';
// import '@angular'




@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot()
  ],
  declarations: [ 
    AppComponent,
    ArtDetailComponent,
    ArticlesComponent,
    DashboardComponent,
    CategoriesComponent
  ],
  providers: [
    ArticleService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
