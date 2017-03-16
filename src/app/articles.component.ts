import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './art';
import { ArticleService } from './art.service';


@Component({
  moduleId: module.id,
  selector: 'my-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})


export class ArticlesComponent implements OnInit {
  title = 'The Specimen';
  articles: Article[];

  selected_article: Article;

  constructor(
    private art_service: ArticleService,
    private router: Router) { }

  onSelect(art: Article) {
    this.selected_article = art;
  }

  gotoDetail() {
    this.router.navigate(['/read', this.selected_article.id]);
  }

  ngOnInit() {
    this.getArticles()
  }

  getArticles() {
    this.art_service.getArticles().then(articles => this.articles = articles);
  }
}
