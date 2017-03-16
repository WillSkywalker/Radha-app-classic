import { Component, OnInit } from '@angular/core';
import { Article } from './art';
import { ArticleService } from './art.service';

@Component({
  moduleId: module.id,
  selector: 'my-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  // articles: Article[];

  // constructor(private art_service: ArticleService) { }


  // ngOnInit() {
  //   this.art_service.getArticles().then(articles => this.articles = articles.slice(0, 3));
  // }

}
